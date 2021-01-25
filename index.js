const findMatching = (drivers, string) => {
    return drivers.filter(drivers.toLowerCase() === string)
}

function fuzzyMatch(arr, query) {
    return arr.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
  }

// or 

const fuzzyMatch = (arr, query) => {
    return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  }

function matchName(drivers, name) {
    return drivers.filter(function(driver) {
        return driver.name === name
    })
}
