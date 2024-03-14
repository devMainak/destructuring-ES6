// destructuring

// to extract elements from array

const extractArrayValues = (arr) => {
  const [first, second, third] = arr

  console.log(first)
  console.log(second)
  console.log(third)
}

extractArrayValues([1, 2, 3])

// to extract value from an object

const extractValuesFromObj = obj => {
  const {name, age, city} = obj

  console.log(`${name} is ${age} years old and lives in ${city}`)
}

extractValuesFromObj({name: "Alice", age: 20, city: "Paris"})

//extract value from nested object

const obj1 = {
  id: 1,
  info: {
    title: "JavaScript Basics",
    description: "Learn Fundamentals"
  }
}

const getObjValues = (obj) => {
  const {info: {title, description}} = obj

  console.log(title)
  console.log(description)
}

getObjValues(obj1);