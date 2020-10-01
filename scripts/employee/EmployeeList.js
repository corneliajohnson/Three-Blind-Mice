import { getEmployees, useEmployees } from "./EmployeeProvider.js";
import { EmployeeComponent } from "./EmployeeComponent.js";

export const EmployeeList = () => {
  getEmployees().then(() => {
    let employeeArray = useEmployees();
    render(employeeArray);
  });
};

const render = (theEmployeeArray) => {
  const contentTarget = document.getElementById("employeeList");
  contentTarget.innerHTML = `${theEmployeeArray
    .map((employee) => {
      return EmployeeComponent(employee);
    })
    .join("")}`;
};
