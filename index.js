/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!

 */
// createEmployeeRecord: Takes an array of first name, family name, title, and pay rate, and returns an employee record object.
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
      firstName,
      familyName,
      title,
      payPerHour,
      timeInEvents: [],
      timeOutEvents: []
    };
  }
  
  // createEmployeeRecords: Takes an array of arrays, converts each array to an employee record using createEmployeeRecord, and returns an array of employee records.
  function createEmployeeRecords(arrays) {
    return arrays.map(createEmployeeRecord);
  }
  
  // createTimeInEvent: Takes a date stamp and adds a time in event to the employee record.
  function createTimeInEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ');
    this.timeInEvents.push({
      type: 'TimeIn',
      hour: parseInt(hour),
      date
    });
    return this;
  }
  
  // createTimeOutEvent: Takes a date stamp and adds a time out event to the employee record.
  function createTimeOutEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ');
    this.timeOutEvents.push({
      type: 'TimeOut',
      hour: parseInt(hour),
      date
    });
    return this;
  }
  
  // hoursWorkedOnDate: Given a date, returns the number of hours worked on that date.
  function hoursWorkedOnDate(date) {
    const timeInEvent = this.timeInEvents.find(event => event.date === date);
    const timeOutEvent = this.timeOutEvents.find(event => event.date === date);
    return (timeOutEvent.hour - timeInEvent.hour) / 100;
  }
  
  // wagesEarnedOnDate: Given a date, calculates the wages earned on that date.
  function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour;
  }
  


    
const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

//   // allWagesFor: Returns the sum of pay owed for all dates worked by the employee.
//   function allWagesFor() {
//     const allDates = this.timeInEvents.map(event => event.date);
//     return allDates.reduce((total, date) => total + wagesEarnedOnDate.call(this, date), 0);
//   }
  
  // findEmployeeByFirstName: Given an array of employee records, returns the record of the employee with the matching first name.
  function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(record => record.firstName === firstName);
  }
  
  // calculatePayroll: Given an array of employee records, returns the total payroll for all employees.
  function calculatePayroll(employees) {
    return employees.reduce((total, employee) => total + allWagesFor.call(employee), 0);
  }
  
  



