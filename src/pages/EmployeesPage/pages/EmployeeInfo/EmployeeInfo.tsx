import {
  Button,
  DialogActions,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useNavigate } from "react-router";
import { ROUTE } from "@constants/route";
import { InfoFormWrapper } from "@components/styled/InfoFormWrapper";
import { Fieldset } from "@components/Fieldset";
import { EmployeeInfoProps } from "./EmployeeInfo.types";
import { useMutation, useQuery } from "@apollo/client";
import { GET_USER_INFO, UPDATE_USER } from "@graphql/User/User.queries";
import {
  UserInfoData,
  UpdateUserInput,
  UpdateUserOutput,
  UserInfo,
} from "@graphql/User/User.interface";
import { memo, useContext, useState } from "react";
import { InlineError } from "@components/InlineError";
import { Loader } from "@components/Loader";
import { useErrorToast } from "@context/ErrorToastStore/ErrorToastStore";
import { SaveButtonWithAdminAccess } from "@components/FormSaveButton";
import { resetEmployee } from "./helpers";
import { DepartmentsData } from "@graphql/Department/Department.interface";
import { GET_DEPARTMENTS } from "@graphql/Department/Department.queries";
import { PositionsNamesIdsData } from "@graphql/Position/Position.interface";
import { GET_POSITIONS_NAMES_IDS } from "@graphql/Position/Position.queries";
import { SelectLabelWrapper } from "@components/styled/SelectLabel";

import { AuthContext } from "@context/authContext/authContext";

export const EmployeeInfo = memo(({ employeeId }: EmployeeInfoProps) => {
  const [error, setError] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { setToastError } = useErrorToast();

  const { control, handleSubmit, reset } = useForm<UserInfo>({
    defaultValues: {
      id: "",
      department: {
        id: "",
        name: "",
      },
      position: { id: "", name: "" },
      profile: {
        first_name: "",
        last_name: "",

        skills: [],
        languages: [],
      },
      cvs: {
        id: "",
        name: "",
        description: "",
        projects: {
          id: "",
          name: "",
          internal_name: "",
          domain: "",
          start_date: "",
          end_date: "",
          tech_stack: [],
        },
      },
    },
  });

  const { data: departments } = useQuery<DepartmentsData>(GET_DEPARTMENTS, {
    onError: (error) => {
      setError(error.message);
    },
  });

  const { data: positions } = useQuery<PositionsNamesIdsData>(
    GET_POSITIONS_NAMES_IDS,
    {
      onError: (error) => {
        setError(error.message);
      },
    },
  );

  const {
    data: userData,
    refetch,
    loading: getUserInfoLoading,
  } = useQuery<UserInfoData>(GET_USER_INFO, {
    variables: {
      id: employeeId,
    },
    onCompleted: (data) => {
      reset(resetEmployee(data.user));
    },
    onError: (error) => {
      setToastError(error.message);
    },
  });

  const [saveUser, { loading: saveUserLoading }] = useMutation<
    UpdateUserOutput,
    UpdateUserInput
  >(UPDATE_USER, {
    onCompleted: (data) => {
      navigate(ROUTE.EMPLOYEES);
    },
    onError: (error) => {
      setError(error.message);
    },
  });

  const onSubmit: SubmitHandler<UserInfo> = (data) => {
    // TODO: delete `= []` constructions later
    const {
      department: { id: departmentId },
      position: { id: positionId },
    } = data;

    const {
      first_name,
      last_name,

      languages = [],
      skills = [],
    } = data.profile;

    saveUser({
      variables: {
        id: employeeId,
        user: {
          profile: {
            first_name,
            last_name,
            departmentId,
            positionId,
            languages, // TODO: Replace with entities input
            skills, // TODO: Replace with entities input
          },
          cvsIds: [], // TODO: Replace with Select
        },
      },
    });
  };

  const onCancel: React.MouseEventHandler = (e) => {
    navigate(ROUTE.EMPLOYEES);
  };

  const handleTryAgain = () => {
    refetch();
  };

  const isUsersMatched = () => {
    return user.email === userData?.user?.email;
  };

  return getUserInfoLoading || saveUserLoading ? (
    <Loader />
  ) : error ? (
    <InlineError
      message="Something went wrong when trying to fetch employee data"
      tryAgainFn={handleTryAgain}
    />
  ) : (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InfoFormWrapper>
        <Fieldset
          control={control}
          required="Please, specify the field"
          label="First Name"
          name="profile.first_name"
        />
        <Fieldset
          control={control}
          required="Please, specify the field"
          label="Last Name"
          name="profile.last_name"
        />
        <SelectLabelWrapper>
          <Typography sx={{ opacity: "0.7" }}>Departments</Typography>
          <Controller
            name="department.id"
            control={control}
            render={({ field }) => (
              <Select sx={{ minWidth: "12em" }} {...field}>
                {departments?.departments.map((dep) => (
                  <MenuItem key={dep.id} value={dep.id}>
                    {dep.name || "Unknown"}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </SelectLabelWrapper>
        <SelectLabelWrapper>
          <Typography sx={{ opacity: "0.7" }}>Position</Typography>
          <Controller
            name="position.id"
            control={control}
            render={({ field }) => (
              <Select sx={{ minWidth: "12em" }} {...field}>
                {positions?.positions.map((pos) => (
                  <MenuItem key={pos.id} value={pos.id}>
                    {pos.name || "Unknown"}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </SelectLabelWrapper>
      </InfoFormWrapper>
      <DialogActions>
        <SaveButtonWithAdminAccess allowAccess={isUsersMatched()} />
        <Button
          onClick={onCancel}
          type="reset"
          value="Cancel"
          variant="outlined"
          color="info"
        >
          Cancel
        </Button>
      </DialogActions>
    </form>
  );
});
