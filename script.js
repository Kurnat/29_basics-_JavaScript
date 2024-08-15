Object.defineProperty(String.prototype, 'capitalize', {             // Here I add 'capitalize' method for String (optional)
  value: function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false
});

const firstName = prompt('Enter your first name...').capitalize()   // <-- "camelCase" style to write a variables
const last_name = prompt('Enter your name...').capitalize()         // <-- "snake_case" style to write a variables
const currentYear = new Date().getFullYear()

alert(`Hi, ${firstName} ${last_name}`)

const getAge = (currentYear) => {
  const yearOfBirthday = +prompt(`What year were you born?`)        // "+" make type "String" to "Number" (+'6' or Number('6') ---> 6)  

  if (isNaN(yearOfBirthday)) {                                      // isNaN() take argument and check if this variables is number (Becouse +'f' -> f it's NaN, but '8' -> 8 it's number) and return true/false (Boolean type)
    alert('Age is not correct')
    getAge()                                                        // Call function again if user enter text (not numbers)
  } else {
    const age = currentYear - yearOfBirthday

    alert(`Your age is ${age}`)
  }
}

getAge(currentYear)  


