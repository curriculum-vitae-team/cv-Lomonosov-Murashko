import { Breadcrumb } from "@components/Breadcrumb";
import { InlineError } from "@components/InlineError";
import { List } from "@components/List";
import { Loader } from "@components/Loader";
import { PageTopTypography } from "@components/PageTopTypography";
import { PageBody } from "@components/styled/PageBody";
import { PageTop } from "@components/styled/PageTop";
import { PageWrapper } from "@components/styled/PageWrapper";

export function EntitiesPage() {
  const data = {
    entities: [
      { id: "1", name: "aaffa" },
      { id: "2", name: "aadda" },
    ],
  };

  const handleTryAgain: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log("try again");
  };

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
        {!"loading" ? (
          <Loader />
        ) : !"error" ? (
          <InlineError
            message="Something went wrong when trying to fetch employees data"
            tryAgainFn={handleTryAgain}
          />
        ) : (
          data?.entities && (
            <List
              items={data.entities.map(({ name, id }) => ({
                name,
                id,
                link: id,
              }))}
            />
          )
        )}
      </PageBody>
    </PageWrapper>
  );
}
