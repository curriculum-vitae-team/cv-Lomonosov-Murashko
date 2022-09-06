import { Button, DialogActions } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
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
import { memo, useState } from "react";
import { InlineError } from "@components/InlineError";
import { Loader } from "@components/Loader";
import { useErrorToast } from "@context/ErrorToastStore/ErrorToastStore";
import { SaveButtonWithAdminAccess } from "@components/FormSaveButton";
import { resetEmployee } from "./helpers";

export const EmployeeInfo = memo(({ employeeId }: EmployeeInfoProps) => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setToastError } = useErrorToast();

  const { control, handleSubmit, reset } = useForm<UserInfo>({
    defaultValues: {
      id: "",
      profile: {
        first_name: "",
        last_name: "",
        department: {
          id: "",
          name: "",
        },
        position: { id: "", name: "" },
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

  const {
    data,
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
      first_name,
      last_name,
      department: { id: departmentId },
      position: { id: positionId },
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
          cvsIds: [],
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
        <Fieldset
          control={control}
          required="Please, specify the field"
          label="Department ID"
          name="profile.department.id"
        />
        <Fieldset
          control={control}
          required="Please, specify the field"
          label="Position ID"
          name="profile.position.id"
        />
      </InfoFormWrapper>
      <DialogActions>
        <SaveButtonWithAdminAccess />
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
