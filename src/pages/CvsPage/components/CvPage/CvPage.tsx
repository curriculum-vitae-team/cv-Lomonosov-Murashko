import { Breadcrumb } from "@components/Breadcrumb";
import { PageTop } from "@components/styled/PageTop";
import { CvInfoPage } from "../CvInfoPage";

export const CvPage = () => {
  return (
    <PageTop>
      <Breadcrumb
        config={{
          cvs: "Cvs",
        }}
      />
      <CvInfoPage />
    </PageTop>
  );
};
