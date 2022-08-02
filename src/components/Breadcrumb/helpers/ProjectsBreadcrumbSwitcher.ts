import { BreadcrumbSwitcher } from "./BreadcrumbSwitcher";
import { IProject } from "@/interfaces/IProject";

export class ProjectsBreadcrumbSwitcher extends BreadcrumbSwitcher {
  protected getReplacedValue(entryData: IProject) {
    return entryData.name;
  }
}
