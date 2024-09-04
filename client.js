// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.


for(let employee of employees){
  //check through each employee
  console.group()
  calculateIndividualEmployeeBonus(employee)
  console.groupEnd()
}



// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  

/*
   Individual Bonus Rules
Those who have a rating of a 2 or below should not receive a bonus. DONE
Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.DONE
Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income. DONE
Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income. DONE
If their employee number is 4 digits long, this means they have been with the company for longer than 15 years, and should receive an additional 5%. DONE
However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%. DONE
No bonus can be above 13% or below 0% total. DONE
*/

  //start with a percentBonus of 0
  let percentBonus = 0

  //check the employee's rating and add to the percentBonus as necessary
  percentBonus += checkRating(employee)



  //check employee number, if it's 4 digits long add 5% to the bonus percentage
  if(employee.employeeNumber.length===4){
    console.log(employee.name, 'employeeNumber length === 4, adding 5% to bonus')
    percentBonus += 5
  };

  //check annual income, if > 65000, remove 1%
if(employee.annualSalary>65000){
  console.log(employee.name, 'employee annual salary > 65000, removing 1% from bonus')
  percentBonus -=1
};

//employee bonus cannot be more than 13%
if (percentBonus >= 13) {
  console.log(employee.name, 'employee bonus higher than 13%, reducing to 13')
  percentBonus = 13
} else if (percentBonus < 0){ //employee bonus cannot be less than 0%
  console.log(employee.name, 'employee bonus less than 0, setting to 0')
  percentBonus = 0
}

  console.log(`percent bonus for ${employee.name} is currently ${percentBonus}`)
  let bonusNumber = employee.annualSalary * (percentBonus / 100) //this is the dollar number of their bonus
  let employeeBonusData = {
    name: employee.name,
    bonusPercentage: percentBonus,
    totalCompensation: Number(employee.annualSalary) + bonusNumber, //this is their salary + bonus
    totalBonus: bonusNumber
  }
  console.log(employeeBonusData)
  return employeeBonusData
}


function checkRating(employee){
  console.log(employee.name, 'checking rating')
  switch(employee.reviewRating){
    case 3: 
      console.log('employee rating is 3, adding 4 to bonusPercent')
      return 4
    case 4:
      console.log('employee rating is 4, adding 6 to bonusPercent')
      return 6
    case 5:
      console.log('employee rating is 5, adding 10 to bonusPercent')
      return 10
    default:
      console.log('employee rating lower than 3 or incorrect data, not changing bonusPercent')
      return 0
  }
}


    // Employee object:
    /*
    {
      name: foo
      employeeNumber: 0000
      annualSalary: 10000
      reviewRating: 4
    }
    */

  
  // return new object with bonus results

//}