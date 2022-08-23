import { Breadcrumb } from "@components/Breadcrumb";
import { InlineError } from "@components/InlineError";
import { List } from "@components/List";
import { Loader } from "@components/Loader";
import { PageTopTypography } from "@components/PageTopTypography";
import { PageBody } from "@components/styled/PageBody";
import { PageTop } from "@components/styled/PageTop";
import { PageWrapper } from "@components/styled/PageWrapper";
import { entitiesList } from "./EntitiesPage.data";

export function EntitiesPage() {
  return (
    <PageWrapper>
      <PageTop>
        <Breadcrumb
          config={{
            entities: "Entities",
          }}
        />
        <PageTopTypography title="Entities" caption="Entities list" />
      </PageTop>
      <PageBody>
        <List
          items={entitiesList.map(({ name, link }) => ({
            name,
            link,
          }))}
        />
      </PageBody>
    </PageWrapper>
  );
}
