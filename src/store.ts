import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "@features/employees/empoloyeesSlice";
import projectsReducer from "@features/projects/projectsSlice";
import cvsReducer from "@features/cvs/cvsSlice";

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
    projects: projectsReducer,
    cvs: cvsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
