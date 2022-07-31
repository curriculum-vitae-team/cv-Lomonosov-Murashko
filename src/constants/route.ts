export enum ROUTE {
  EMPTY = "/",
  EMPLOYEES = "/employees",
  TARGET_EMPLOYEE = "/employees/:employeeId/*",
  PROJECTS = "/projects",
  TARGET_PROJECT = "/projects/:projectId/*",
  CVS = "/cvs",
  ENTITIES = "/entities",
  ANY_OTHER = "*",
}
