import { Breadcrumb } from "@components/Breadcrumb";
import { PageTopTypography } from "@components/PageTopTypography";
import { PageBody } from "@components/styled/PageBody";
import { PageTop } from "@components/styled/PageTop";
import { PageWrapper } from "@components/styled/PageWrapper";
import { StyledTable } from "@components/styled/StyledTable";
import { TableEntry } from "@constants/table";
import { useParams } from "react-router";

// add projects array to each cv
export const cvs = [
  {
    id: "1",
    name: "cv1",
    description: "aoaoasdcsdvdfvdfv sdffdvdfv dfdf",
    email: "123@sd.com",
    lastName: "Murashko",
    skills: "React, redux",
    specialization: "React",
    department: "Js",
  },
  {
    id: "111",
    name: "cv1",
    description: "aoaoasdcsdvdfvdfv sdffdvdfv dfdf",
    email: "123@sd.com",
    lastName: "Murashko",
    skills: "React, redux",
    specialization: "React",
    department: "Js",
  },
  {
    id: "1123123",
    name: "cv1",
    description: "aoaoasdcsdvdfvdfv sdffdvdfv dfdf",
    email: "123@sd.com",
    lastName: "Murashko",
    skills: "React, redux",
    specialization: "React",
    department: "Js",
  },
  {
    id: "10",
    name: "cv1",
    description: "aoaoasdcsdvdfvdfv sdffdvdfv dfdf",
    email: "123@sd.com",
    lastName: "Murashko",
    skills: "React, redux",
    specialization: "React",
    department: "Js",
  },
  {
    id: "11",
    name: "cv1",
    description: "aoaoasdcsdvdfvdfv sdffdvdfv dfdf",
    email: "123@sd.com",
    lastName: "Murashko",
    skills: "React, redux",
    specialization: "React",
    department: "Js",
  },
  {
    id: "12",
    name: "cv1",
    description: "aoaoasdcsdvdfvdfv sdffdvdfv dfdf",
    email: "123@sd.com",
    lastName: "Murashko",
    skills: "React, redux",
    specialization: "React",
    department: "Js",
  },
  {
    id: "13",
    name: "cv1",
    description: "aoaoasdcsdvdfvdfv sdffdvdfv dfdf",
    email: "123@sd.com",
    lastName: "Murashko",
    skills: "React, redux",
    specialization: "React",
    department: "Js",
  },
  {
    id: "14",
    name: "cv1",
    description: "aoaoasdcsdvdfvdfv sdffdvdfv dfdf",
    email: "123@sd.com",
    lastName: "Murashko",
    skills: "React, redux",
    specialization: "React",
    department: "Js",
  },
  {
    id: "15",
    name: "cv1",
    description: "aoaoasdcsdvdfvdfv sdffdvdfv dfdf",
    email: "123@sd.com",
    lastName: "Murashko",
    skills: "React, redux",
    specialization: "React",
    department: "Js",
  },
  {
    id: "16",
    name: "cv1",
    description: "aoaoasdcsdvdfvdfv sdffdvdfv dfdf",
    email: "123@sd.com",
    lastName: "Murashko",
    skills: "React, redux",
    specialization: "React",
    department: "Js",
  },
  {
    id: "17",
    name: "cv1",
    description: "aoaoasdcsdvdfvdfv sdffdvdfv dfdf",
    email: "123@sd.com",
    lastName: "Murashko",
    skills: "React, redux",
    specialization: "React",
    department: "Js",
  },
  {
    id: "2",
    name: "cv2",
    description: "aoaoa dfv dfgd o2",
    email: "123@sd.com",
    lastName: "Murashko",
    skills: "React, redux",
    specialization: "React",
    department: "Js",
  },
  {
    id: "3",
    name: "cv3",
    description:
      "aoaoa dfg dfgdf gdfgdf dfgdf g dfgdfg df gd  dfgdfgdfgo3 sdsdsdkjvbskd sdkjfksbdk sd kjsk djbksdbkdjs sdjsdkks sd kbsdkj bkjs ksjdj ksdb ksb",
    email: "123@sd.com",
    lastName: "Murashko",
    skills: "React, redux",
    specialization: "React",
    department: "Js",
  },
];

const head = [
  { columnKey: "name", columnName: "Name", isSortable: true },
  { columnKey: "description", columnName: "Description", isSortable: true },
];

export const CvsPage = () => {
  const { cvId } = useParams();
  const cv = cvs.find(({ id }) => id === cvId)!;

  const handleItemDelete = (id: string) => {
    // TODO:
  };

  return (
    <PageWrapper>
      <PageTop>
        <Breadcrumb
          config={{
            cvs: "Cvs",
            [cvId!]: cv ? cv.name : cvId!,
          }}
        />
        <PageTopTypography title="CVs" caption="Cvs list" />
      </PageTop>
      <PageBody>
        <StyledTable
          onDelete={handleItemDelete}
          head={head}
          items={cvs}
          redirectButtonText="CV details"
          deleteButtonText="Delete"
          entryType={TableEntry.CV}
        />
      </PageBody>
    </PageWrapper>
  );
};
