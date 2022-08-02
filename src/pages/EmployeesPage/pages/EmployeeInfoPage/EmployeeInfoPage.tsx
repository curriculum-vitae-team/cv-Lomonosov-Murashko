import { useParams } from "react-router";
import { Breadcrumb } from "../../../../components/Breadcrumb";
import { ROUTE_PARAM, ROUTE_SEGMENT } from "../../../../constants/route";
import { BreadcrumbsConfig } from "../../../../context/BreadcrumbsConfig";
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
