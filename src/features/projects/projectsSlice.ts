import { projectsMock } from "@mock/projects";
import { createSlice } from "@reduxjs/toolkit";
import { ProjectsActions, ProjectsState } from "./projectsSlice.types";

const initialState: ProjectsState = [...projectsMock];

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    added: (state, action: ProjectsActions["added"]) => {
      state.push(action.payload);

      return state;
    },
    updated: (state, action: ProjectsActions["updated"]) => {
      state = state.map((proj) => {
        if (proj.id === action.payload.id) {
          return {
            ...proj,
            ...action.payload.data,
          };
        }

        return proj;
      });

      return state;
    },
    removed: (state, action: ProjectsActions["removed"]) => {
      state = state.filter((proj) => proj.id !== action.payload);
      return state;
    },
  },
});

export const { added, updated, removed } = projectsSlice.actions;

export default projectsSlice.reducer;
