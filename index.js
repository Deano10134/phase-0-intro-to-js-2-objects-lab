// Write your solution in this file!
const employee = {
  name: 'Sam',
  streetAddress: '11 Broadway'
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newEmployee = { ...employee };
  newEmployee[key] = value;
  return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
// Test cases
const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'age', 30);
console.log(updatedEmployee); // { name: 'Sam', streetAddress: '11 Broadway', age: 30 }
console.log(employee); // { name: 'Sam', streetAddress: '11 Broadway' }
const destructivelyUpdatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'age', 30);
console.log(destructivelyUpdatedEmployee); // { name: 'Sam', streetAddress: '11 Broadway', age: 30 }
console.log(employee); // { name: 'Sam', streetAddress: '11 Broadway', age: 30 }
const deletedEmployee = deleteFromEmployeeByKey(employee, 'name');
console.log(deletedEmployee); // { streetAddress: '11 Broadway', age: 30 }
console.log(employee); // { name: 'Sam', streetAddress: '11 Broadway', age: 30 }
const destructivelyDeletedEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'name');
console.log(destructivelyDeletedEmployee); // { streetAddress: '11 Broadway', age: 30 }
console.log(employee); // { streetAddress: '11 Broadway', age: 30 }
// The code above defines an employee object and implements functions to update, delete, and destructively update the employee object.
// The test cases demonstrate the functionality of each function.
// The functions work as expected, creating new objects or modifying the original object as specified.
// The test cases show the expected output for each function, confirming that they work correctly.
// The functions are designed to handle the employee object and its properties, allowing for both non-destructive and destructive updates.
// The test cases also confirm that the original employee object remains unchanged when using non-destructive methods.
// The destructivelyUpdateEmployeeWithKeyAndValue function modifies the original employee object, while the updateEmployeeWithKeyAndValue function creates a new object.
// The deleteFromEmployeeByKey function creates a new object without the specified key, while the destructivelyDeleteFromEmployeeByKey function modifies the original object.
// The test cases demonstrate the expected output for each function, confirming that they work correctly.