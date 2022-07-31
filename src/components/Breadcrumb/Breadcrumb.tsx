import { useEffect, useState } from "react";
import { useLocation, Link, useParams } from "react-router-dom";
import { Breadcrumbs, Typography } from "@mui/material";
import { IEmployee } from "../../interfaces/IEmployee";
import { BreadcrumbProps } from "./Breadcrumbs.types";

import { emp } from "../../pages/EmployeesPage/EmployeesPage";

export const Breadcrumb = ({ type }: BreadcrumbProps) => {
  const [pathnamesCopy, setPathnamesCopy] = useState<string[]>([]);
  const { pathname } = useLocation();
  const { employeeId, projectId, cvId } = useParams();

  const pathnames = pathname.split("/").filter((path: string) => path);

  const handleEmployeePage = ((pathnames: string[]) => {
    emp.forEach((employee: IEmployee) => {
      if (employee.id === employeeId) {
        const ID = pathnames.findIndex((path: string) => path === employeeId);
        pathnames[ID] = employee.name + " " + employee.lastName;
      }
    });
    return pathnames;
  });

  useEffect(() => {
    switch (type) {
      case "employee":
        setPathnamesCopy([...handleEmployeePage([...pathnames])]);
        break;
      case "project": 
        // handle project id
        break;
      case "cv":
        // handle cv id
        break;
      default:
        setPathnamesCopy([...pathnames]);
        break;
    }
  }, [type, pathname]);

  const isLast = (idx: number) => {
    return idx === pathnames.length - 1;
  };

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {pathnamesCopy.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;

        return isLast(index) ? (
          <Typography key={name}>{name}</Typography>
        ) : (
          <Link key={name} to={routeTo}>
            {name}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};
