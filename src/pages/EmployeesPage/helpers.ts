import { IEmployeeTable } from "@interfaces/IEmployee";
import { User } from "@graphql/User/User.interface";

export function getEmployees(users: User[]): IEmployeeTable[] {
  return users.map((user) => ({
    id: user.id,
    name: user.profile.first_name,
    lastName: user.profile.last_name,
    email: user.email,
    department: user.profile.department?.name || "Unknown",
    specialization: user.profile.position_name || "Unknown",
  }));
}
