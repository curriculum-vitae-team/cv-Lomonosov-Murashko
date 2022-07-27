import { IEmployee } from "../../../../interfaces/employeesInterface";
import { Employee } from "../Employee";

type EmployeesProps = {
  employees: IEmployee[];
};

export const Employees = ({ employees }: EmployeesProps) => {
  return (
    <>
      {employees.map((employee: IEmployee) => <Employee key={employee.id} info={employee} />)}
    </>
  )
}