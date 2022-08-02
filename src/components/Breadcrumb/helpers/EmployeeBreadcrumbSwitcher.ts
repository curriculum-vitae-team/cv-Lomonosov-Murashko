import { BreadcrumbSwitcher } from "./BreadcrumbSwitcher";
import { IEmployee } from "@/interfaces/IEmployee";

export class EmployeeBreadcrumbSwitcher extends BreadcrumbSwitcher {
  protected getReplacedValue(entryData: IEmployee) {
    return entryData.name + " " + entryData.lastName;
  }
}
