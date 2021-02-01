// Code your solution here

function findMatching(array, string) {
    return array.filter(foundItem =>
        foundItem.toUpperCase() === string.toUpperCase()
    )
}

function fuzzyMatch(array, string) {
    return array.filter(foundItem =>
        foundItem.toUpperCase().indexOf(string.toUpperCase()) === 0
    )
}

function matchName(array, string) {
    return array.filter(foundItem =>
        foundItem.name === string
    )
}