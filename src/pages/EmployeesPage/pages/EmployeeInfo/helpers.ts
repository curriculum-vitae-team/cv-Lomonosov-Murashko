import { UserInfo } from "@graphql/User/User.interface";
import { IEmployeeInfo } from "@interfaces/IEmployee";

export function getEmployeeInfo<T extends UserInfo>(
  user: T,
): T extends undefined ? IEmployeeInfo | undefined : IEmployeeInfo {
  if (!user) return user;

  return {
    name: user.profile.first_name,
    lastName: user.profile.last_name,
    email: user.email,
    departmentId: user.profile.department?.id || "Unknown",
    specialization: user.profile.specialization || "Unknown",
    id: user.id,
  };
}

export const resetEmployee = (user: UserInfo) => {
  return {
    id: user.id,
    profile: {
      first_name: user.profile.first_name || "",
      last_name: user.profile.last_name || "",
      department: {
        id: user.profile.department?.id || "",
        name: user.profile.department?.name || "",
      },
      specialization: user.profile.specialization || "",
    },
  };
};
