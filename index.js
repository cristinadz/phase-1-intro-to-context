function createEmployeeRecord(line) {
  return {
    firstName: line[0],
    familyName: line[1],
    title: line[2],
    payPerHour: line[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
}

function createEmployeeRecords(employeeData) {
  return employeeData.map((line) => createEmployeeRecord(line));
}

function createTimeInEvent(employee, dateStamp) {
  let [date, hour] = dateStamp.split("");

  employee.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date,
  });
  return employee;
}
