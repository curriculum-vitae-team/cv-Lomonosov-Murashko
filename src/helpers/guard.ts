import { User } from "@interfaces/user.interface";

export type GuardFunction = (user: User | null) => boolean;
export type RoleGuardWithUser = (roles: string[]) => GuardFunction;

export const authGuard: GuardFunction = (user) => {
  return !!user?.profile;
};

export const roleGuard: RoleGuardWithUser = (roles) => {
  return (user) => {
    return roles.every((role) => user?.role?.includes(role));
  };
};
