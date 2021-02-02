const drivers = {}

function findMatching(drivers, string) {
    let result = drivers.filter(driver => 
        driver.toLowerCase() === string.toLowerCase())
        return result
}

function fuzzyMatch(drivers, string) {
    let result = drivers.filter(driver =>
        driver.toLowerCase().indexOf(string.toLowerCase()) === 0)
        return result
}

function matchName(drivers, string) {
    let result = drivers.filter(driver => 
        driver.name === string)
        return result
}