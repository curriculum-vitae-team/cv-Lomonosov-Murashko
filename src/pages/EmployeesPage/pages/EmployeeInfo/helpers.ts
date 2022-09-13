import { UserInfo } from "@graphql/User/User.interface";
import { IEmployeeInfo } from "@interfaces/IEmployee";
import { CreateUserInput } from "@src/graphql/User/user.types";

export function getEmployeeInfo<T extends UserInfo>(
  user: T,
): T extends undefined ? IEmployeeInfo | undefined : IEmployeeInfo {
  if (!user) return user;

  return {
    name: user.profile.first_name,
    lastName: user.profile.last_name,
    email: user.email,
    departmentId: user.department?.id || "Unknown",
    specialization: user.position_name || "Unknown",
    id: user.id,
  };
}

export const resetEmployee = (user: UserInfo) => {
  return {
    departmentId: user.department?.id || "",
    positionId: user.position?.id || "",
    profile: {
      first_name: user.profile.first_name || "",
      last_name: user.profile.last_name || "",
      skills: user.profile.skills,
      languages: user.profile.languages,
    },
    cvsIds: user.cvs.map((cv) => cv.id),
  };
};
