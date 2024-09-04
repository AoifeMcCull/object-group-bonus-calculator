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
  calculateIndividualEmployeeBonus(employee)

}



// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here

/*
   Individual Bonus Rules
Those who have a rating of a 2 or below should not receive a bonus. DONE
Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.DONE
Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income. DONE
Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income. DONE
If their employee number is 4 digits long, this means they have been with the company for longer than 15 years, and should receive an additional 5%.
However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
No bonus can be above 13% or below 0% total.
*/

  let percentBonus = 0

  percentBonus += checkRating(employee)



  //check employee number, if it's 4 digits long add 5% to the bonus percentage
  if(employee.employeeNumber.length===4){
    console.log('employeeNumber length === 4, adding 5% to bonus')
    percentBonus += 5
  };

  //check annual income, if > 65000, remove 1%
if(employee.annualSalary>65000){
  console.log('employee annual salary > 65000, removing 1% from bonus')
  percentBonus -=1
};

if (percentBonus >= 13) {
  console.log('employee bonus higher than 13%, reducing to 13')
  percentBonus = 13
} else if (percentBonus < 0){
  console.log('employee bonus less than 0, setting to 0')
  percentBonus = 0
}
console.log(percentBonus);

  console.log(`percent bonus for ${employee.name} is currently ${percentBonus}`)
  let bonusNumber = employee.annualSalary * (percentBonus / 100)
  let employeeBonusData = {
    name: employee.name,
    bonusPercentage: percentBonus,
    totalCompensation: employee.annualSalary + bonusNumber,
    totalBonus: bonusNumber
  }

  return employeeBonusData
  
}


function checkRating(employee){
  switch(employee.reviewRating){
    case 3: 
      return 4
    case 4:
      return 6
    case 5:
      return 10
    default:
      return 0
  }
}


console.log(checkRating(employees[0]))

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