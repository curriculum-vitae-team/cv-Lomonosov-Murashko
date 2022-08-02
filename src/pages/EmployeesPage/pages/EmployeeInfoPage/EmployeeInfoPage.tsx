import { useParams } from "react-router";
import { Breadcrumb } from "@/components/Breadcrumb";
import { EmployeeBreadcrumbSwitcher } from "@/components/Breadcrumb/helpers/EmployeeBreadcrumbSwitcher";
import { ROUTE_PARAM, ROUTE_SEGMENT } from "@/constants/route";
import { emp } from "../../EmployeesPage";

export const EmployeeInfoPage = () => {
  const { employeeId } = useParams();

  return (
    <div>
      <Breadcrumb
        upperCasedParts={[ROUTE_PARAM.EMPLOYEE_ID, ROUTE_SEGMENT.EMPLOYEES]}
        switcher={new EmployeeBreadcrumbSwitcher()}
        replacementTargets={[{ entryId: employeeId!, entryData: emp }]}
      />
    </div>
  );
};
