const Schema = require("./emp_pb");

const navi = new Schema.Employee();
navi.setId(1000);
navi.setName("Navi");
navi.setSalary(100.2);

const aarav = new Schema.Employee();
aarav.setId(1000);
aarav.setName("aarav");
aarav.setSalary(100.2);

const vedant = new Schema.Employee();
vedant.setId(1000);
vedant.setName("vedant");
vedant.setSalary(100.2);

const employees = new Schema.Employees();
employees.addEmployees(navi);
employees.addEmployees(aarav)

console.log(employees.getEmployeesList());

console.log(employees.toObject())

console.log(`Hello, My name is ${navi.getName()}`);
