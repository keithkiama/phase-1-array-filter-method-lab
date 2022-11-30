// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const findMatching = (array,string) =>{
  return array.filter((item) => item.toLowerCase() === string.toLowerCase())
}
console.log(findMatching(drivers,"sammy"))

const fuzzyMatch = (array,string) =>{
  return array.filter((item) => {
      if (item.startsWith(string)){
        return item
      }
  })
}
console.log(fuzzyMatch(drivers,"Bo"))

const matchName = (array,string) => {
  return array.filter((item) => item.name === string)
}
console.log(matchName(drivers,"Sarah"))
