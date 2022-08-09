export interface IResetPassword {
  email: string;
}

export interface ISignIn extends IResetPassword {
  password: string;
}

export interface ISignUp extends ISignIn {
  passwordConfirmation: string;
}
