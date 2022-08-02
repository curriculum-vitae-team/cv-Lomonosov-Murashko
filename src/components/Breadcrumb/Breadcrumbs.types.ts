import { ROUTE_PARAM, ROUTE_SEGMENT } from "../../constants/route";
import { IEntryData } from "../../interfaces/IEntryData";

export type BreadcrumbProps = {};

type ReplacementTarget = {
  entryId: string;
  entryData: IEntryData[];
};
