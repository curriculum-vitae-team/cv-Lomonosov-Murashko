import {
  CvLanguagesInfo,
  ProjectFullInfo,
  SkillMastery,
} from "@graphql/Cv/Cv.interface";
import { UserFullInfo } from "@graphql/User/User.interface";

export type PdfViewerProps = {
  data: {
    name: string;
    languages: CvLanguagesInfo[];
    projects: ProjectFullInfo[];
    skills: SkillMastery[];
    user: UserFullInfo;
  };
  variant?: string;
};
