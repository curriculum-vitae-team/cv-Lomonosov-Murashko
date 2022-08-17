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
import { useState } from "react";

export const EmployeeInfo = ({ employeeId }: EmployeeInfoProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

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

  const { data } = useQuery<UserInfoData>(GET_USER_INFO, {
    variables: {
      id: employeeId,
    },
    onCompleted: (data) => {
      setIsLoading(false);

      reset(data.user);
    },
    onError: (error) => {
      setError(error.message);
    },
  });

  const [saveUser] = useMutation<UpdateUserOutput, UpdateUserInput>(
    UPDATE_USER,
    {
      onCompleted: (data) => {
        navigate("/employees");
      },
      onError: (error) => {
        setError(error.message);
      },
    },
  );

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<UserInfo> = (data) => {
    setIsLoading(true);

    const {
      first_name,
      last_name,
      department: { id: departmentId },
      specialization,
      languages,
      skills,
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

  return isLoading ? (
    <>loader</>
  ) : error ? (
    <>error</>
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
            {/* <Fieldset
          control={control}
          required="Please, specify the field"
          label="Email"
          name="email"
        /> */}
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
};
