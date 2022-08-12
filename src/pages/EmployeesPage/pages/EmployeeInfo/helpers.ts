import { UserInfo } from "@graphql/User.interfaces";
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
