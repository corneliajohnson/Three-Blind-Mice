export const EmployeeComponent = (employeeObj, departmentObj) => {
  return `
  <div class="employee">
    <header class="employee__name">
        <h1>${employeeObj.firstName} ${employeeObj.lastName}</h1>
    </header>
    <section class="employee__computer">
        Currently using a ${employeeObj.computer.year} ${employeeObj.computer.model}
    </section>
    <section class="employee__department">
        Works in the ${departmentObj.name} department
    </section>
</div>
  `;
};
