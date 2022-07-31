import { emp } from "../../pages/EmployeesPage/EmployeesPage";
import { IEmployee } from "../../interfaces/IEmployee";

export const handleEmployeePage = ((pathnames: string[], id: string) => {
  emp.forEach((employee: IEmployee) => {
    if (employee.id === id) {
      const ID = pathnames.findIndex((path: string) => path === id);
      pathnames[ID] = employee.name + " " + employee.lastName;
    }
  });
  return pathnames;
});