import { Button, DialogActions } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { ROUTE } from "@constants/route";
import { IEmployeeInfo } from "@interfaces/IEmployee";
import { InfoFormWrapper } from "@components/styled/InfoFormWrapper";
import { Fieldset } from "@components/Fieldset";
import { EmployeeInfoProps } from "./EmployeeInfo.types";
import { useMutation, useQuery } from "@apollo/client";
import { GET_USER_INFO, UPDATE_USER } from "@graphql/User";
import {
  UserInfoData,
  UpdateUserInput,
  UpdateUserOutput,
} from "@graphql/User.interfaces";
import { getEmployeeInfo } from "./helpers";
import { useEffect } from "react";
import { useState } from "react";

export const EmployeeInfo = ({ employeeId }: EmployeeInfoProps) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { data: userQueryData } = useQuery<UserInfoData>(GET_USER_INFO, {
    variables: {
      id: employeeId,
    },
    onCompleted: () => {
      setLoading(false);
    },
    onError: (error) => {
      setError(error.message);
    },
    fetchPolicy: "no-cache",
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

  const { control, handleSubmit, reset, getValues } = useForm<IEmployeeInfo>({
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      specialization: "",
      departmentId: "",
    },
  });

  useEffect(() => {
    if (userQueryData?.user) {
      const employee = getEmployeeInfo(userQueryData.user);

      const { name, lastName, email, specialization, departmentId } = employee;

      reset({ name, lastName, email, specialization, departmentId });
    }
  }, [userQueryData, reset]);

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IEmployeeInfo> = (data) => {
    setLoading(true);

    saveUser({
      variables: {
        id: employeeId,
        user: {
          profile: {
            first_name: data.name,
            last_name: data.lastName,
            departmentId: data.departmentId,
            specialization: data.specialization,
            languages: [], // TODO: Replace with entities input
            skills: [], // TODO: Replace with entities input
          },
        },
      },
    });
  };

  return loading ? (
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
              name="name"
            />
            <Fieldset
              control={control}
              required="Please, specify the field"
              label="Last Name"
              name="lastName"
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
              name="departmentId"
            />
            <Fieldset
              control={control}
              required="Please, specify the field"
              label="Specialization"
              name="specialization"
            />
          </InfoFormWrapper>
          <DialogActions>
            <Button type="submit" value="Save" variant="contained">
              Save
            </Button>
            <Button
              onClick={() => navigate(ROUTE.EMPLOYEES)}
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
