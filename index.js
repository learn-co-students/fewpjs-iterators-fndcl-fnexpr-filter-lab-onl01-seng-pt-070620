// Code your solution here

const { stringContaining } = require("expect")


function findMatching(driversArray, nameString) {
    return driversArray.filter(driver => driver.toLowerCase() === nameString.toLowerCase())
}


function fuzzyMatch(driversArray, nameString) { 
    return driversArray.filter(driver => driver.charAt(0).toLowerCase()=== nameString.charAt(0).toLowerCase())
}

function matchName(driversArray, nameString) {
    return driversArray.filter(driver => driver.name===nameString)
}