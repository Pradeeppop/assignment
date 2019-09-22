//Destructuring simply implies breaking down a complex structure into simpler parts.
// In JavaScript, this complex structure is usually an object or an array. 
//With the destructuring syntax, you can extract smaller fragments from arrays and objects.
// Destructuring syntax can be used for variable declaration or variable assignment.
const student = {
    firstname: 'Glad',
    lastname: 'Chinda',
    country: 'Nigeria'
};

// Object Destructuring
const { firstname, lastname, country } = student;

console.log(firstname, lastname, country); // Glad Chinda Nigeri

//Here we used object destructuring syntax to assign values to three variables: 
//firstname, lastname and country using the values from their corresponding keys on the student object.
