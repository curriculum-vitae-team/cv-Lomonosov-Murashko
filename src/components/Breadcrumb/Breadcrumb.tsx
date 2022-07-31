/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useLocation, Link, useParams } from "react-router-dom";
import { Breadcrumbs, Typography } from "@mui/material";
import { IEmployee } from "../../interfaces/IEmployee";
import { BreadcrumbProps } from "./Breadcrumbs.types";

import { emp } from "../../pages/EmployeesPage/EmployeesPage";

export const Breadcrumb = ({ type, isUpperCase }: BreadcrumbProps) => {
  const [currentPathnames, setCurrentPathnames] = useState<string[]>([]);
  const { pathname } = useLocation();
  const { employeeId, projectId, cvId } = useParams();

  const pathnames = pathname.split("/").filter((path: string) => path);

  const handleEmployeePage = (pathnames: string[]) => {
    emp.forEach((employee: IEmployee) => {
      if (employee.id === employeeId) {
        const ID = pathnames.findIndex((path: string) => path === employeeId);
        pathnames[ID] = employee.name + " " + employee.lastName;
      }
    });
    return pathnames;
  };

  const handleProjectPage = (pathnames: string[]) => {
    // handle page
  };

  const handleCvPage = (pathnames: string[]) => {
    // handle page
  };

  useEffect(() => {
    switch (type) {
      case "employee":
        setCurrentPathnames([...handleEmployeePage([...pathnames])]);
        break;
      case "project":
        // setCurrentPathnames([...handleProjectPage([...pathnames])]);
        break;
      case "cv":
        // setCurrentPathnames([...handleCvPage([...pathnames])]);
        break;
      default:
        setCurrentPathnames([...pathnames]);
        break;
    }
  }, [type, pathname]);

  const isLast = (idx: number) => {
    return idx === pathnames.length - 1;
  };

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {currentPathnames.map((name: string, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const path = isUpperCase
          ? name[0].toUpperCase().concat(name.slice(1))
          : name;

        return isLast(index) ? (
          <Typography key={name}>{path}</Typography>
        ) : (
          <Link key={name} to={routeTo}>
            {path}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};
