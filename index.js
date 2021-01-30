// Code your solution here


function findMatching(array, str){
return array.filter(driver => driver.toLowerCase() === str.toLowerCase())
}

function fuzzyMatch(array, str){
return array.filter(driver => driver[0] === str[0])
}

function matchName(array, str){
return array.filter(driver => driver.name === str)
}