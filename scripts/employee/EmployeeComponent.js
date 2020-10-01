export const EmployeeComponent = (employeeObj) => {
  return `
  <div>
    <h3>${employeeObj.firstName} ${employeeObj.lastName}</h3>
    <p>Age: ${employeeObj.age}</p>
    <p>Computer: ${employeeObj.computer.model} (${employeeObj.computer.year})</p>
  </div>
  `;
};
