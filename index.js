const { match } = require("sinon");

function findMatching(drivers, string) {
    return drivers.filter(function(driver) {
        return driver.toLowerCase().indexOf(string.toLowerCase()) !== -1
    })
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(function(driver) {
        return driver.startsWith(string)
    })
  }

function matchName(drivers, name) {
    return drivers.filter(function (driver) {
        return driver.name === name
    })
}
