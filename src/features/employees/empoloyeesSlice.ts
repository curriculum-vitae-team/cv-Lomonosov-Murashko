import { emp } from "@mock/emp";
import { createSlice } from "@reduxjs/toolkit";
import { EmployeesActions, EmployeesState } from "./employeesSlice.types";

const initialState: EmployeesState = [...emp];

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    added: (state, action: EmployeesActions["added"]) => {
      state.push(action.payload);
    },
    updated: (state, action: EmployeesActions["updated"]) => {
      state = state.map((emp) => {
        if (emp.id === action.payload.id) {
          return {
            ...emp,
            ...action.payload.data,
          };
        }

        return emp;
      });
    },
    removed: (state, action: EmployeesActions["removed"]) => {
      state = state.filter((emp) => emp.id !== action.payload);
    },
  },
});

export const { added, updated, removed } = employeesSlice.actions;

export default employeesSlice.reducer;
