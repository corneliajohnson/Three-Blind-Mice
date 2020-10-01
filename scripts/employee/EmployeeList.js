import { getEmployees, useEmployees } from "./EmployeeProvider.js";

export const EmployeeList = () => {
  getEmployees().then(() => {
    let employeeArray = useEmployees();
    render(employeeArray);
  });
};

const render = (theEmployeeArray) => {
  console.log(theEmployeeArray);
};
