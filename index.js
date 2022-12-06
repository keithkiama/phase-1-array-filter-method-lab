// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const findMatching = (drivers,name) =>{
  return drivers.filter((item) => item.toLowerCase() === name.toLowerCase())
}
console.log(findMatching(drivers,"Bobby"))

const fuzzyMatch = (drivers,name) =>{   
  return drivers.filter((item) => {
      if (item.startsWith(name)){
        return item
      }
  })
}
console.log(fuzzyMatch(drivers,"Sa"))

const matchName = (drivers,name) => {
  return drivers.filter((item) => item.name === name)
}
console.log(matchName(drivers,"Sally"))
