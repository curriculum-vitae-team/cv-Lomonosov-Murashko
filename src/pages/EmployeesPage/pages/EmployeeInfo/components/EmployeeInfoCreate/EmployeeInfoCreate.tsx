import { useMutation } from "@apollo/client";
import { ROUTE } from "@constants/route";
import {
  CreateUserInput,
  CreateUserOutput,
} from "@graphql/User/User.interface";
import { CREATE_USER } from "@graphql/User/User.queries";
import { IEmployeeCore } from "@interfaces/IEmployee";
import { createUserCacheUpdate } from "@graphql/User/User.cache";
import { useCallback } from "react";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { EmployeeCreateInfoForm } from "../EmployeeCreateInfoForm";

export const EmployeeInfoCreate = () => {
  const navigate = useNavigate();

  const [createUser] = useMutation<CreateUserOutput, CreateUserInput>(
    CREATE_USER,
    {
      onCompleted: () => {
        navigate(ROUTE.EMPLOYEES);
      },
      onError: (error) => {
        console.log(error.message);
      }
    },
  );

  const onSubmit: SubmitHandler<IEmployeeCore> = useCallback(
    (data) => {            
      createUser({
        variables: {
          user: {
            auth: {
              email: data.auth.email,
              password: data.auth.password,
            },
            profile: {
              first_name: data.profile.first_name,
              last_name: data.profile.last_name,
              departmentId: data.profile.departmentId,
              positionId: data.profile.positionId,
              skills: [],
              languages: [],
            },
            cvsIds: [],
          },
        },
        update: createUserCacheUpdate(),
      });
    },
    [createUser],
  );

  return <EmployeeCreateInfoForm onSubmit={onSubmit} />;
};
