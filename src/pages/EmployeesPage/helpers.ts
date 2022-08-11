import { IEmployeeTable } from "@interfaces/IEmployee";
import { User } from "@graphql/User";

export function getEmployees(users: User[]): IEmployeeTable[] {
  console.log(users);
  return users.map((user) => ({
    id: user.id,
    name: user.profile.first_name,
    lastName: user.profile.last_name,
    email: user.email,
    department: user.profile.department
      ? user.profile.department.name
      : "Unknown",
    specialization: user.profile.specialization || "Unknown",
  }));
}
