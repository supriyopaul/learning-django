var firstname = prompt("Enter first name: ")
var lastname = prompt("Enter last name: ")
var height = prompt("Enter height in cm: ")
var age = prompt("Enter age: ")
var petname = prompt("Enter pet name: ")

if (firstname[0].toUpperCase() === "J"
    && lastname[0].toUpperCase() === "J"
    && age <= 30 && age >= 20
    && petname[petname.length - 1].toUpperCase() === "Y"
    && height >= 170) {
    console.log("Welcome spy!")
}
else {
    console.log("Nothing to see here!")
}
