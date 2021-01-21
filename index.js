// Code your solution here
function findMatching(drivers, string) {
    return drivers.filter(d => {
        return d.toLowerCase() === string.toLowerCase();
    })
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(d => {
        return d[0] === string[0];
    })
}

function matchName(drivers, string) {
    return drivers.filter(d => {
        return d.name === string;
    })
}