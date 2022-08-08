import { useParams } from "react-router";
import { CvInfo } from "../CvInfo/CvInfo";

export const CvInfoPage = () => {
  const { cvId } = useParams();
  return <CvInfo cvId={cvId || ""} />;
};
