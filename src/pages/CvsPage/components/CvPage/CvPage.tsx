import { Breadcrumb } from "@components/Breadcrumb";
import { PageTop } from "@components/styled/PageTop";
import { CvInfoUpdatePage } from "../CvInfoUpdatePage";

export const CvPage = () => {
  return (
    <PageTop>
      <Breadcrumb
        config={{
          cvs: "Cvs",
        }}
      />
      <CvInfoUpdatePage />
    </PageTop>
  );
};
