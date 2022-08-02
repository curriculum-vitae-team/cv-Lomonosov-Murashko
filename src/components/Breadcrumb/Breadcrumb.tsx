/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { useLocation, Link, useParams } from "react-router-dom";
import { Breadcrumbs, Typography } from "@mui/material";
import { BreadcrumbProps } from "./Breadcrumbs.types";

import { ROUTE_PARAM, ROUTE_SEGMENT } from "../../constants/route";

export const Breadcrumb = ({
  upperCasedParts,
  switcher,
  replacementTargets,
}: BreadcrumbProps) => {
  const [currentPathnames, setCurrentPathnames] = useState<string[]>([]);
  const { pathname } = useLocation();
  const params = useParams<ROUTE_PARAM>();
  const paramsKeys = Object.keys(params) as ROUTE_PARAM[];

  const createPathname = () => {
    return pathname.split("/").filter((path: string) => path);
  };

  const pathnames = useRef(createPathname());

  const pathnamesIndexesToUpperCase: number[] = [];

  paramsKeys.forEach((param) =>
    upperCasedParts?.includes(param)
      ? pathnamesIndexesToUpperCase.push(
          pathnames.current.findIndex((pathname) => pathname === params[param]),
        )
      : null,
  );

  pathnames.current.forEach((pathname, i) =>
    upperCasedParts?.includes(pathname as ROUTE_SEGMENT)
      ? pathnamesIndexesToUpperCase.push(i)
      : null,
  );

  useEffect(() => {
    // replaces id with human-readable string, i.e. first and last name

    if (replacementTargets && switcher) {
      replacementTargets.forEach((replacementTarget) => {
        setCurrentPathnames((prev) =>
          switcher.getPathNamesWithReplacedId(
            pathnames.current,
            replacementTarget.entryData,
            replacementTarget.entryId,
          ),
        );
      });
    } else {
      setCurrentPathnames(pathnames.current);
    }
  }, [pathname, replacementTargets, switcher]);

  useEffect(() => {
    pathnames.current = createPathname();
  }, [pathname]);

  const isLast = (idx: number) => {
    return idx === pathnames.current.length - 1;
  };

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {currentPathnames.map((name: string, index) => {
        const routeTo = `/${pathnames.current.slice(0, index + 1).join("/")}`;
        const path = pathnamesIndexesToUpperCase.includes(index)
          ? name[0].toUpperCase().concat(name.slice(1))
          : name;

        return isLast(index) ? (
          <Typography key={name}>{path} /</Typography>
        ) : (
          <Link key={name} to={routeTo}>
            {path}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};
