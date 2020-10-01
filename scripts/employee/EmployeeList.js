import { getEmployees, useEmployees } from "./EmployeeProvider.js";

export const EmployeeList = () => {
  getEmployees().then(() => useEmployees());
};
