import { useState } from "react";
import { Fieldset } from "@components/Fieldset";
import { InfoFormWrapper } from "@components/styled/InfoFormWrapper";
import { ISignIn } from "@interfaces/IAuth";
import { Button, Checkbox, FormControlLabel } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import logoBlack from "@assets/images/logoBlack.svg";
import {
  AuthImg,
  AuthStyledForm,
  AuthAdditionalInfoWrapper,
} from "@components/styled/auth-styles/Auth.styles";

export const SignIn = () => {
  const [checked, setChecked] = useState(false);
  const { control, handleSubmit } = useForm<ISignIn>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  const onSubmit: SubmitHandler<ISignIn> = (data) => {
    // const currentEmployee = authMock.find(employee => {
    //   return employee.email === data.email && employee.password === data.password;
    // });
    // TODO: checked === true ? remember user and sign in : sign in
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
        <AuthAdditionalInfoWrapper>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={handleCheckboxChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label="Remember me"
          />
        </AuthAdditionalInfoWrapper>
        <Button type="submit" fullWidth variant="contained">
          Login
        </Button>
      </AuthStyledForm>
    </>
  );
};
