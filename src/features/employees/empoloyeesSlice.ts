import { employeesMock } from "@mock/emp";
import { createSlice } from "@reduxjs/toolkit";
import { EmployeesActions, EmployeesState } from "./employeesSlice.types";

const initialState: EmployeesState = [...employeesMock];

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    added: (state, action: EmployeesActions["added"]) => {
      state.push(action.payload);

      return state;
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

      return state;
    },
    removed: (state, action: EmployeesActions["removed"]) => {
      state = state.filter((emp) => emp.id !== action.payload);
      return state;
    },
  },
});

export const { added, updated, removed } = employeesSlice.actions;

export default employeesSlice.reducer;
