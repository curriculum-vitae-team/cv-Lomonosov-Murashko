import { IEmployee } from "@interfaces/IEmployee";
import { PayloadAction } from "@reduxjs/toolkit";

export type EmployeesState = IEmployee[];

export type EmployeesActions = {
  added: PayloadAction<IEmployee>;
  updated: PayloadAction<{
    data: { [T in keyof IEmployee]: IEmployee[T] };
    id: IEmployee["id"];
  }>;

  removed: PayloadAction<IEmployee["id"]>;
};
