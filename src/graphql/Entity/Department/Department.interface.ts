import { DeleteResult } from "@graphql/delete.types";

export interface GetDepartmentsData {
  departments: Department[];
}

export interface UpdateDepartmentInput {
  id: string;
  department: Pick<Department, "name">;
}

export interface DeleteDepartmentOutput {
  deleteDepartment: DeleteResult;
}

export interface Department {
  name: string;
  id: string;
}
