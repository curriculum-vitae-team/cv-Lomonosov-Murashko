export enum ROUTE {
  EMPTY = "/",
  EMPLOYEES = "/employees",
  TARGET_EMPLOYEE = "/employees/:employeeId/*",
  TARGET_EMPLOYEE_INFO = "info",
  TARGET_EMPLOYEE_CV = "cv",
  PROJECTS = "/projects",
  CVS = "/cvs",
  ENTITIES = "/entities",
  ANY_OTHER = "*",
}
