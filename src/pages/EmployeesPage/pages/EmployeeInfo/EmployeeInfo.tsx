import { Button, DialogActions, Stack, Typography } from "@mui/material";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { useNavigate } from "react-router";
import { ROUTE } from "@constants/route";
import { InfoFormWrapper } from "@components/styled/InfoFormWrapper";
import { DynamicFieldsetGroupWrapper } from "@components/styled/DynamicFieldsetGroupWrapper";
import { Fieldset } from "@components/Fieldset";
import { EmployeeInfoProps } from "./EmployeeInfo.types";
import { useMutation, useQuery } from "@apollo/client";
import { GET_USER_INFO, UPDATE_USER } from "@graphql/User/User.queries";
import {
  GetUserResult,
  UpdateUserInput,
  UpdateUserResult,
} from "@graphql/User/User.interface";
import { memo, useContext, useState } from "react";
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
import { GetSkillsData } from "@src/graphql/Entity/Skill/Skill.interface";
import { GET_SKILLS } from "@src/graphql/Entity/Skill/Skill.queries";
import { SelectEntry } from "@src/graphql/shared/components/SelectEntry";
import { CreateUserInput } from "@src/graphql/User/User.interface";
import { DynamicFieldset } from "@src/components/DynamicFieldset";
import { DynamicArrayField } from "@src/components/DynamicFieldset/components/DynamicArrayField";
import { Mastery } from "@src/constants/skill-mastery.constants";
import { LanguagesInput } from "./components/LanguagesInput";
import { SkillsInput } from "./SkillsInput";

export const EmployeeInfo = memo(({ employeeId }: EmployeeInfoProps) => {
  const [error, setError] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { setToastError } = useErrorToast();

  // TODO: Form must correspond the data sent
  const { control, handleSubmit, reset, getValues } = useForm<CreateUserInput>({
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
    fetchPolicy: "network-only",
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
    const {
      departmentId,
      positionId,
      profile: { first_name, last_name, languages = [], skills = [] },
    } = data.user;

    if (!userData) return;

    saveUser({
      variables: {
        id: employeeId,
        user: {
          departmentId,
          positionId,
          profile: {
            first_name,
            last_name,
            skills,
            languages,
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
      <SkillsInput
        control={control}
        skillsInForm={getValues().user.profile.skills}
        onError={(error) => setError(error.message)}
      />
      <LanguagesInput
        control={control}
        languagesInForm={getValues().user.profile.languages}
        onError={(error) => setError(error.message)}
      />
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
