import { ICV } from "@interfaces/ICV";
import { PayloadAction } from "@reduxjs/toolkit";

export type CvsState = ICV[];

export type CvsActions = {
  added: PayloadAction<ICV>;
  updated: PayloadAction<{
    data: { [T in keyof ICV]: ICV[T] };
    id: ICV["id"];
  }>;

  removed: PayloadAction<ICV["id"]>;
};
