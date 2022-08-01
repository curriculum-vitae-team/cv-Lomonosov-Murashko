import { Breadcrumb } from "../../components/Breadcrumb";
import { ROUTE_SEGMENT } from "../../constants/route";

export const proj = [
  { id: "1", name: "p1", startDate: "10.10.2012", endDate: "10.11.2052" },
  { id: "2", name: "p2", startDate: "10.10.2022", endDate: "10.11.2052" },
  { id: "3", name: "p3", startDate: "10.10.2032", endDate: "10.11.2052" },
];

export const ProjectsPage = () => {
  return (
    <div>
      <Breadcrumb upperCasedParts={[ROUTE_SEGMENT.PROJECTS]} />
      ProjectsPage
    </div>
  );
};
