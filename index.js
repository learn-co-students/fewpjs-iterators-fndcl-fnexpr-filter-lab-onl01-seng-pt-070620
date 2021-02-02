// Code your solution here
function findMatching(drivers, string) {
    return drivers.filter(driverSearch => driverSearch.toLowerCase() === string.toLowerCase());
};

function fuzzyMatch(drivers, string) {
    return drivers.filter (driverSearch => 
        driverSearch.toLowerCase().indexOf(string.toLowerCase()) === 0)
};

function matchName(drivers, string) {
    return drivers.filter(driverSearch => driverSearch.name === string)
};