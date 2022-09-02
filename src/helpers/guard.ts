import { User } from "@graphql/User/User.interface";

export type GuardFunction = (user: User) => boolean;
export type RoleGuardWithUser = (roles: string[]) => GuardFunction;

export const authGuard: GuardFunction = (user) => {
  return !!user;
};

export const roleGuard: RoleGuardWithUser = (roles) => {
  return (user) => {
    return roles.every((role) => user?.role?.includes(role));
  };
};
