function findMatching(array, string) {
    return array.filter( driver => driver.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(array, string) {
    // return array.filter( driver => driver[0] === string[0] && driver[1] === string[1])
    return array.filter( driver => driver.toLowerCase().indexOf(string.toLowerCase()) === 0)
}

function matchName(array, string) {
    return array.filter( driver => driver.name === string)
}