import { Fieldset } from "@components/Fieldset";
import { InfoFormWrapper } from "@components/styled/InfoFormWrapper";
import { ISignUp } from "@interfaces/IAuth";
import { Button } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import logoBlack from "@assets/images/logoBlack.svg";
import {
  AuthImg,
  AuthStyledForm,
} from "@components/styled/auth-styles/Auth.styles";

export const SignUp = () => {
  const { control, handleSubmit } = useForm<ISignUp>({
    defaultValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  const onSubmit: SubmitHandler<ISignUp> = (data) => {
    // TODO: verify passwords equasions
    // navigate to employees
  };

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
        <InfoFormWrapper>
          <Fieldset
            isFullWidth={true}
            inputWidth="100%"
            required="Please, specify the field"
            label="Password Confirmation"
            control={control}
            name="passwordConfirmation"
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
