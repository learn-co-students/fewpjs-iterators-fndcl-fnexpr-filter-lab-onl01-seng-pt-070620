// Code your solution here
const findMatching = (namesList, nameArg) => {
   return namesList.filter(name => {
        return name.toLowerCase() === nameArg.toLowerCase()
    })
}

const fuzzyMatch = (namesList, nameArg) => {
    return namesList.filter(name => {
        return name.startsWith(nameArg)
    })
}

const matchName = (namesObjs, nameArg) => {
    return namesObjs.filter(obj => {
        return obj.name === nameArg
    })
}