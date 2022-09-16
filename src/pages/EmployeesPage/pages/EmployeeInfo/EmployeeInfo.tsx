import {
  Button,
  DialogActions,
  Menu,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import {
  useForm,
  SubmitHandler,
  Controller,
  useFieldArray,
} from "react-hook-form";
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
import { DynamicFieldset } from "@src/components/DynamicFieldset";
import { DynamicArrayField } from "@src/components/DynamicFieldset/components/DynamicArrayField";
import { Mastery } from "@src/constants/skill-mastery.constants";
import { Proficiency } from "@src/constants/language-proficiency.constants";

export const EmployeeInfo = memo(({ employeeId }: EmployeeInfoProps) => {
  const [error, setError] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { setToastError } = useErrorToast();

  // TODO: Form must correspond the data sent
  const { control, handleSubmit, reset, register } = useForm<CreateUserInput>({
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

  const {
    fields: skillsFields,
    append: appendSkill,
    remove: removeSkill,
    update: updateSkill,
  } = useFieldArray({
    control,
    name: "user.profile.skills",
  });

  const {
    fields: languagesFields,
    append: appendLanguage,
    remove: removeLanguage,
    update: updateLanguage,
  } = useFieldArray({
    control,
    name: "user.profile.languages",
  });

  const { data: languagesData } = useQuery<GetLanguagesData>(GET_LANGUAGES, {
    onError: (error) => {
      setError(error.message);
    },
  });

  const { data: skillsData } = useQuery<GetSkillsData>(GET_SKILLS, {
    onError: (error) => {
      setError(error.message);
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

  const handleSkillDelete = (name: string) => {
    userData &&
      removeSkill(
        userData.user.profile.skills.findIndex(
          (skill) => skill.skill_name === name,
        ),
      );
  };

  const handleSkillChange = (name: string, newValue: string) => {
    if (isMastery(newValue)) {
      userData &&
        updateSkill(
          userData.user.profile.skills.findIndex(
            (skill) => skill.skill_name === name,
          ),
          { skill_name: name, mastery: newValue },
        );
    }

    function isMastery(value: string): value is Mastery {
      if (Object.values(Mastery).includes(value as Mastery)) {
        return true;
      }

      return false;
    }
  };

  const handleLanguageDelete = (name: string) => {
    userData &&
      removeLanguage(
        userData.user.profile.languages.findIndex(
          (language) => language.language_name === name,
        ),
      );
  };

  const handleLanguageChange = (name: string, newValue: string) => {
    if (isProficiency(newValue)) {
      userData &&
        updateLanguage(
          userData.user.profile.languages.findIndex(
            (language) => language.language_name === name,
          ),
          { language_name: name, proficiency: newValue },
        );
    }

    function isProficiency(value: string): value is Proficiency {
      if (Object.values(Proficiency).includes(value as Proficiency)) {
        return true;
      }

      return false;
    }
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
      <DynamicFieldsetGroupWrapper>
        <Stack gap={2} justifyContent="start">
          <Typography variant="h5" component="h2">
            Skills
          </Typography>
          <DynamicFieldset
            onNew={(entryName: string) => {
              appendSkill({ skill_name: entryName, mastery: Mastery.Novice });
            }}
            inputEntries={
              skillsData
                ? skillsData.skills
                    .filter(
                      (skill) =>
                        !skillsFields.find(
                          (field) => field.skill_name === skill.name,
                        ),
                    )
                    .map((skill) => ({ entryName: skill.name }))
                : []
            }
          >
            {skillsFields.map((field, index) => (
              <DynamicArrayField
                key={field.id}
                entryName={field.skill_name}
                possibleValues={Mastery}
                registerFnReturn={register(`user.profile.skills.${index}`)}
                onDelete={handleSkillDelete}
                onChange={handleSkillChange}
                value={field.mastery}
              />
            ))}
          </DynamicFieldset>
        </Stack>

        <Stack gap={2} justifyContent="start">
          <Typography variant="h5" component="h2">
            Languages
          </Typography>
          <DynamicFieldset
            onNew={(entryName: string) => {
              appendLanguage({
                language_name: entryName,
                proficiency: Proficiency.A1,
              });
            }}
            inputEntries={
              languagesData && userData
                ? languagesData.languages
                    .filter(
                      (language) =>
                        !languagesFields.find(
                          (field) => field.language_name === language.name,
                        ),
                    )
                    .map((language) => ({ entryName: language.name }))
                : []
            }
          >
            {languagesFields.map((field, index) => (
              <DynamicArrayField
                key={field.id}
                entryName={field.language_name}
                possibleValues={Proficiency}
                registerFnReturn={register(`user.profile.languages.${index}`)}
                onDelete={handleLanguageDelete}
                onChange={handleLanguageChange}
                value={field.proficiency}
              />
            ))}
          </DynamicFieldset>
        </Stack>
      </DynamicFieldsetGroupWrapper>
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
