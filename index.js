function findMatching(driversArray, nameStr) {
    return driversArray.filter(driver => driver.toLowerCase() === nameStr.toLowerCase())    
}

function fuzzyMatch(driversArray, letterString) {
    return driversArray.filter( driver => driver.toLowerCase().indexOf(letterString.toLowerCase())=== 0)
}

function matchName(driversArray, wantedName) {
    return driversArray.filter( driver => driver.name === wantedName)
}