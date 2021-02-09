// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
const driversObject = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(drivers, name) {
      return drivers.filter(driver => {
          return driver.toUpperCase() === name.toUpperCase();
      })
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => {
        return driver.startsWith(letters)
    })
}
function matchName(drivers, name) {
    return drivers.filter(driver => {
        return driver.name === name
    })
}
