import {
  CvLanguagesInfo,
  ProjectFullInfo,
  Skills,
} from "@graphql/Cv/Cv.interface";
import { UserFullInfo } from "@graphql/User/User.interface";

export type PdfViewerProps = {
  data: {
    name: string;
    languages: CvLanguagesInfo[];
    projects: ProjectFullInfo[];
    skills: Skills[];
    user: UserFullInfo;
  };
  variant?: number;
};
