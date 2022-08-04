import { Breadcrumb } from "@components/Breadcrumb";
import { PageTop } from "@components/styled/PageTop";
import { CvInfo } from "../CvInfo";

export const CvPage = () => {
  return (
    <PageTop>
      <Breadcrumb
        config={{
          cvs: "Cvs",
        }}
      />
      <CvInfo />
    </PageTop>
  );
};
