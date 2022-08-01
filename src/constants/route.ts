export enum ROUTE_PARAM {
  EMPLOYEE_ID = ":employeeId",
  PROJECT_ID = ":projectId",
  CV_ID = ":cvId",
  ENTITY_ID = ":entityId",
}

export enum ROUTE_SEGMENT {
  EMPLOYEES = "employees",
  PROJECTS = "projects",
  ENTITIES = "entities",
  CVS = "cvs",
}

export enum ROUTE {
  EMPTY = "/",
  EMPLOYEES = "/employees",
  TARGET_EMPLOYEE = "/employees/:employeeId",
  PROJECTS = "/projects",
  TARGET_PROJECT = "/projects/:projectId",
  CVS = "/cvs",
  ENTITIES = "/entities",
  ANY_OTHER = "*",
}
