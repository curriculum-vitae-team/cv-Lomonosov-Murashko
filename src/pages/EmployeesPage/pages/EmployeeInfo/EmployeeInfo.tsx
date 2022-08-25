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

export const EmployeeInfo = memo(({ employeeId }: EmployeeInfoProps) => {
  const [error, setError] = useState("");

  const { setToastError } = useErrorToast();

  const { control, handleSubmit, reset, getValues } = useForm<UserInfo>({
    defaultValues: {
      id: "",
      profile: {
        first_name: "",
        last_name: "",
        department: {
          id: "",
          name: "",
        },
        specialization: "",
        skills: [],
        languages: [],
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
      reset(data.user);
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

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<UserInfo> = (data) => {
    // TODO: delete `= []` constructions later
    const {
      first_name,
      last_name,
      department: { id: departmentId },
      specialization,
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
            specialization,
            languages, // TODO: Replace with entities input
            skills, // TODO: Replace with entities input
          },
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
    <>
      {Object.values(getValues()).every((key) => !!key) && (
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
              label="Specialization"
              name="profile.specialization"
            />
          </InfoFormWrapper>
          <DialogActions>
            <Button type="submit" value="Save" variant="contained">
              Save
            </Button>
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
      )}
    </>
  );
});
