import { ROUTE_PARAM, ROUTE_SEGMENT } from "@/constants/route";
import { IEntryData } from "@/interfaces/IEntryData";
import { BreadcrumbSwitcher } from "./helpers/BreadcrumbSwitcher";

export type BreadcrumbProps = {
  upperCasedParts?: (ROUTE_SEGMENT | ROUTE_PARAM)[];
  switcher?: BreadcrumbSwitcher;
  replacementTargets?: ReplacementTarget[];
};

type ReplacementTarget = {
  entryId: string;
  entryData: IEntryData[];
};
