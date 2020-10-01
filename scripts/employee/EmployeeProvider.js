let empoyees = [];

export const useEmployees = () => empoyees.slice();

export const getEmployees = () => {
  return fetch("http://localhost:8088/employees")
    .then((response) => response.json())
    .then((parsedEmpoyees) => {
      empoyees = parsedEmpoyees;
    });
};
