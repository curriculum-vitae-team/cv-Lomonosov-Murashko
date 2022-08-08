import { IProject } from "@interfaces/IProject";
import { PayloadAction } from "@reduxjs/toolkit";

export type ProjectsState = IProject[];

export type ProjectsActions = {
  added: PayloadAction<IProject>;
  updated: PayloadAction<{
    data: { [T in keyof IProject]: IProject[T] };
    id: IProject["id"];
  }>;

  removed: PayloadAction<IProject["id"]>;
};
