// Code your solution here
function findMatching(list, driver) {
    return list.filter( drivers => 
        drivers.toLowerCase() === driver.toLowerCase()
        )
}

function fuzzyMatch(list, driver) {
    return list.filter( possibleMatch =>
      possibleMatch.toLowerCase().indexOf(driver.toLowerCase()) === 0
    )
}

function matchName(source, soughtName) {
    return source.filter( record => record.name === soughtName)
  }