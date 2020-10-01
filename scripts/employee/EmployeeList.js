import { getEmployees, useEmployees } from "./EmployeeProvider.js";
import {
  getDepartments,
  useDepartments,
} from "../department/DepartmentProvider.js";
import { EmployeeComponent } from "./EmployeeComponent.js";

export const EmployeeList = () => {
  getEmployees()
    .then(getDepartments)
    .then(() => {
      let employeeArray = useEmployees();
      let departmentArray = useDepartments();
      render(employeeArray, departmentArray);
    });
};

const render = (theEmployeeArray, theDepartmentArray) => {
  const contentTarget = document.getElementById("employeeList");
  contentTarget.innerHTML = `${theEmployeeArray
    .map((employee) => {
      const matchingDepartment = theDepartmentArray.find(
        (department) => department.id === employee.departmentId
      );
      return EmployeeComponent(employee, matchingDepartment);
    })
    .join("")}`;
};
