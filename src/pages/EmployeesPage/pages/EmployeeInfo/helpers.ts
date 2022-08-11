import { UserInfo } from "@graphql/User";
import { IEmployeeInfo } from "@interfaces/IEmployee";

export function getEmployeeInfo(
  user: UserInfo | undefined,
): IEmployeeInfo | undefined {
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
