import { Fieldset } from "@components/Fieldset";
import { InfoFormWrapper } from "@components/styled/InfoFormWrapper";
import { IAuth } from "@interfaces/IAuth";
import { Button } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import logoBlack from "@assets/images/logoBlack.svg";
import {
  AuthImg,
  AuthStyledForm,
} from "@components/styled/auth-styles/Auth.styles";
import { useCallback, useContext } from "react";
import { AuthInputData, AuthOutputData } from "@graphql/Auth/Auth.interface";
import { SIGNUP } from "@graphql/Auth/Auth.queries";
import { useMutation } from "@apollo/client";
import { ROUTE } from "@constants/route";
import { useNavigate } from "react-router";
import { AuthContext } from "@context/authContext/authContext";

export const SignUp = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const { control, handleSubmit } = useForm<IAuth>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [signup] = useMutation<AuthOutputData, AuthInputData>(SIGNUP, {
    onCompleted: (data) => {
      login(data);
      navigate(ROUTE.EMPLOYEES);
    },
    onError: (error) => {
      // handle error
    },
  });

  const onSubmit: SubmitHandler<IAuth> = useCallback(
    (data) => {
      signup({
        variables: {
          auth: {
            email: data.email,
            password: data.password,
          },
        },
      });
    },
    [signup],
  );

  return (
    <>
      <AuthImg src={logoBlack} alt="logo" />
      <AuthStyledForm onSubmit={handleSubmit(onSubmit)}>
        <InfoFormWrapper>
          <Fieldset
            isFullWidth={true}
            inputWidth="100%"
            required="Please, specify the field"
            label="Email"
            control={control}
            name="email"
          />
        </InfoFormWrapper>
        <InfoFormWrapper>
          <Fieldset
            isFullWidth={true}
            inputWidth="100%"
            required="Please, specify the field"
            label="Password"
            control={control}
            name="password"
            type="password"
          />
        </InfoFormWrapper>
        <Button type="submit" fullWidth variant="contained">
          Sign Up
        </Button>
      </AuthStyledForm>
    </>
  );
};
