import { cvsMock } from "@mock/cvs";
import { createSlice } from "@reduxjs/toolkit";
import { CvsActions, CvsState } from "./cvsSlice.types";

const initialState: CvsState = [...cvsMock];

const cvsSlice = createSlice({
  name: "cvs",
  initialState,
  reducers: {
    added: (state, action: CvsActions["added"]) => {
      state.push(action.payload);

      return state;
    },
    updated: (state, action: CvsActions["updated"]) => {
      state = state.map((cv) => {
        if (cv.id === action.payload.id) {
          return {
            ...cv,
            ...action.payload.data,
          };
        }

        return cv;
      });

      return state;
    },
    removed: (state, action: CvsActions["removed"]) => {
      state = state.filter((cv) => cv.id !== action.payload);
      return state;
    },
  },
});

export const { added, updated, removed } = cvsSlice.actions;

export default cvsSlice.reducer;
