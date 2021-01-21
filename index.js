// Code your solution here
function findMatching(drivers, string){
    let matching = drivers.filter(name => {
      return name.toUpperCase() === string.toUpperCase()
    })
    return matching;
  };
  function fuzzyMatch(drivers, string){
      let matchingDrivers = drivers.filter(name => {
        let firstLetters = name.split("")[0] + name.split("")[1];
        return firstLetters.toUpperCase() === string.toUpperCase()
      })
      return matchingDrivers;
  };
  function matchName(drivers, string) {
    let matching = drivers.filter( driver => {
      return driver["name"] === string;
    });
    return matching;
  };