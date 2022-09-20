import { CacheUpdaterFunction } from "src/types";
import { DeleteEntityEntryInput } from "../Entity.interface";
import {
  DeleteDepartmentOutput,
  GetDepartmentsData,
} from "./Department.interface";
import { GET_DEPARTMENTS } from "./Department.queries";

export const deleteDepartmentCacheUpdate =
  (
    id: string,
  ): CacheUpdaterFunction<DeleteDepartmentOutput, DeleteEntityEntryInput> =>
  (cache, { data }) => {
    const existingDepartments = cache.readQuery<GetDepartmentsData>({
      query: GET_DEPARTMENTS,
    });

    if (existingDepartments && data?.deleteDepartment.affected) {
      cache.writeQuery({
        query: GET_DEPARTMENTS,
        data: {
          departments: existingDepartments.departments.filter(
            (entry) => entry.id !== id,
          ),
        },
      });
    }
  };
