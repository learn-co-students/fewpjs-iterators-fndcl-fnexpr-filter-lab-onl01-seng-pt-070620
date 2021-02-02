// Code your solution here
function findMatching(names, name){
    let matchingNames = names.filter(n => {
        return n.toUpperCase() === name.toUpperCase();
    })
    return matchingNames
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter( driver =>
        driver.toLowerCase().indexOf(letters.toLowerCase()) === 0
      )
}

function matchName(drivers, name) {
    return drivers.filter(driver => 
        driver.name === name 
    )
}

