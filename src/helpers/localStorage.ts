import { AuthUserInfoWithMemorizedValue } from "@graphql/Auth/Auth.interface";

export const isUserExists = () => {
  return localStorage.getItem("user");
};

export const getUserInfoFromLocalStorage = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : "";
};

export const deleteUserInfoFromLocalStorage = () => {
  return localStorage.removeItem("user");
};

export const setUserInfoToLocalStorage = (
  info: AuthUserInfoWithMemorizedValue,
) => {
  localStorage.setItem("user", JSON.stringify(info));
};
