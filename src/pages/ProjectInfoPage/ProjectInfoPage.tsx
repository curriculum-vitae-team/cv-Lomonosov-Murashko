import { useParams } from "react-router";
import { ProjectInfo } from "../../components/ProjectInfo";

export const ProjectInfoPage = () => {
  const { projectId } = useParams();
  return <ProjectInfo projectId={projectId || ""} />;
};
