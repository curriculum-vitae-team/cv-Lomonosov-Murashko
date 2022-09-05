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
    specialization: user.profile.position_name || "Unknown",
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
      position: {
        id: user.profile.position?.id || "",
        name: user.profile.position?.name || "",
      },
    },
    cvs: {
      id: user.cvs?.id || "",
      name: user.cvs?.name || "",
      description: user.cvs?.description || "",
      projects: {
        id: user.cvs?.projects?.id || "",
        name: user.cvs?.projects?.name || "",
        internal_name: user.cvs?.projects?.internal_name || "",
        domain: user.cvs?.projects?.domain || "",
        start_date: user.cvs?.projects?.start_date || "",
        end_date: user.cvs?.projects?.end_date || "",
        tech_stack: user.cvs?.projects?.tech_stack || [],
      },
    },
  };
};
