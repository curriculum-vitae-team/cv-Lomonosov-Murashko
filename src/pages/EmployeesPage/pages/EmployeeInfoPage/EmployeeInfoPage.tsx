import { useParams } from "react-router";
<<<<<<< HEAD
import { Breadcrumb } from "../../../../components/Breadcrumb";
import { ROUTE_PARAM, ROUTE_SEGMENT } from "../../../../constants/route";
import { BreadcrumbsConfig } from "../../../../context/BreadcrumbsConfig";
=======
import { Breadcrumb } from "@/components/Breadcrumb";
import { EmployeeBreadcrumbSwitcher } from "@/components/Breadcrumb/helpers/EmployeeBreadcrumbSwitcher";
import { ROUTE_PARAM, ROUTE_SEGMENT } from "@/constants/route";
>>>>>>> 0595e7d9a02fabf8bd122b4674bcb4d1b9ec26d1
import { emp } from "../../EmployeesPage";

export const EmployeeInfoPage = () => {
  const { employeeId } = useParams();

  const employee = emp.find(({ id }) => id === employeeId);

  return (
    <div>
      <BreadcrumbsConfig
        config={{
          info: "Info",
          cv: "CV",
          employees: "Employees",
          [employeeId!]: employee
            ? employee.name + " " + employee.lastName
            : employeeId!,
        }}
      >
        <Breadcrumb />
      </BreadcrumbsConfig>
    </div>
  );
};
