import {
  Button,
  DialogActions,
  Menu,
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
  GetUserResult,
  UpdateUserInput,
  UpdateUserResult,
} from "@graphql/User/User.interface";
import { memo, useContext, useEffect, useState } from "react";
import { InlineError } from "@components/InlineError";
import { Loader } from "@components/Loader";
import { useErrorToast } from "@context/ErrorToastStore/ErrorToastStore";
import { SaveButtonWithAdminAccess } from "@components/FormSaveButton";
import { resetEmployee } from "./helpers";
import { DepartmentsData } from "@src/graphql/Entity/Department/Department.interface";
import { GET_DEPARTMENTS } from "@src/graphql/Entity/Department/Department.queries";
import { PositionsNamesIdsData } from "@src/graphql/Entity/Position/Position.interface";
import { GET_POSITIONS_NAMES_IDS } from "@src/graphql/Entity/Position/Position.queries";

import { AuthContext } from "@context/authContext/authContext";
import { GetLanguagesData } from "@src/graphql/Entity/Language/Language.interface";
import { GET_LANGUAGES } from "@src/graphql/Entity/Language/Language.queries";
import { GetSkillsData } from "@src/graphql/Entity/Skill/Skill.interface";
import { GET_SKILLS } from "@src/graphql/Entity/Skill/Skill.queries";
import { SelectEntry } from "@src/graphql/shared/components/SelectEntry";
import { CreateUserInput } from "@src/graphql/User/User.interface";
import { MultipleSelect } from "@src/graphql/shared/components/MultipleSelect";
import { IEmployee } from "@src/interfaces/IEmployee";

export const EmployeeInfo = memo(({ employeeId }: EmployeeInfoProps) => {
  const [error, setError] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { setToastError } = useErrorToast();

  // TODO: Form must correspond the data sent
  const { control, handleSubmit, reset } = useForm<CreateUserInput>({
    defaultValues: {
      user: {
        departmentId: "",
        positionId: "",
        profile: {
          first_name: "",
          last_name: "",
          skills: [],
          languages: [],
        },
        cvsIds: [],
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

  const { data: languages } = useQuery<GetLanguagesData>(GET_LANGUAGES, {
    onError: (error) => {
      setError(error.message);
    },
  });

  const { data: skills } = useQuery<GetSkillsData>(GET_SKILLS, {
    onError: (error) => {
      setError(error.message);
    },
  });

  const {
    data: userData,
    refetch,
    loading: getUserInfoLoading,
  } = useQuery<GetUserResult>(GET_USER_INFO, {
    variables: {
      id: employeeId,
    },
    onCompleted: (data) => {
      if (data.user) {
        reset(resetEmployee(data.user));
      }
    },
    onError: (error) => {
      setToastError(error.message);
    },
  });

  const [saveUser, { loading: saveUserLoading }] = useMutation<
    UpdateUserResult,
    UpdateUserInput
  >(UPDATE_USER, {
    onCompleted: (data) => {
      navigate(ROUTE.EMPLOYEES);
    },
    onError: (error) => {
      setError(error.message);
    },
  });

  const onSubmit: SubmitHandler<CreateUserInput> = (data) => {
    // TODO: delete `= []` constructions later
    const {
      departmentId,
      positionId,
      profile: { first_name, last_name, languages = [], skills = [] },
    } = data.user;

    saveUser({
      variables: {
        id: employeeId,
        user: {
          departmentId,
          positionId,
          profile: {
            first_name,
            last_name,
            languages,
            skills,
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
          name="user.profile.first_name"
        />
        <Fieldset
          control={control}
          required="Please, specify the field"
          label="Last Name"
          name="user.profile.last_name"
        />
        <SelectEntry
          name="user.departmentId"
          control={control}
          title="Departments"
          entries={departments?.departments}
        />
        <SelectEntry
          name="user.positionId"
          control={control}
          title="Positions"
          entries={positions?.positions}
        />
      </InfoFormWrapper>
      <InfoFormWrapper>
        <MultipleSelect
          name="user.profile.skills"
          control={control}
          title="Skills"
          entries={skills?.skills}
        />
        <MultipleSelect
          name="user.profile.languages"
          control={control}
          title="Languages"
          entries={languages?.languages}
        />
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
