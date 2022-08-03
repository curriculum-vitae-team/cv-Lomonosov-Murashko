import { useParams } from "react-router";
import { Breadcrumb } from "../../../../components/Breadcrumb";
import { ROUTE_PARAM, ROUTE_SEGMENT } from "../../../../constants/route";
import { emp } from "../../EmployeesPage";

export const EmployeeInfoPage = () => {
  const { employeeId } = useParams();

  const employee = emp.find(({ id }) => id === employeeId);

  return (
    <div>
      <Breadcrumb
        config={{
          employees: "Employees",
        }}
      />
    </div>
  );
};
