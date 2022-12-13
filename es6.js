// ES6

// Interpolazione di stringa

// Ternary operator

const personName = "Antonio";

// let isAdmitted = false;

// if (personName === "Davide") {
//   isAdmitted = true;
// }

const isAdmitted = personName === "Davide" ? true : false;

console.log(isAdmitted);

// DEFAULT PARAMETERS

const mul = function (n1, n2 = 1) {
  // if(!n2){
  //     n2 = 1
  // }
  return n1 * n2;
};

console.log(mul(2));

const search = function (query = "nature") {
  //   if (!query) {
  //       console.log("non hai fornito una chiave valida");
  //       return;
  //   }

  console.log("https://url.com/search?q=" + query);
};

search();
search("computer", "pc");

// REST PARAMETERS

const withRestParams = function (param1, param2, param3, ...rest) {
  console.log(param1);
  console.log(param2);
  console.log(param3);
  console.log(rest);

  for (let i = 0; i < rest.length; i++) {
    console.log(rest[i]);
  }
};

withRestParams(23, 100, 0, 90, 101, 3, 5, 1);

const concatenate = function (...rest) {
  console.log(rest);

  return rest.join(" ");
};

console.log(concatenate("Ciao", "ragazzi", "come", "state"));

// DESTRUCTURING FOR OBJECTS
const person = {
  name: "Antonio",
  surname: "Vallerga",
  location: { country: "Italy", region: "Liguria", city: "Genoa" }
};

const {
  name,
  surname,
  location: { region }
} = person;

console.log(name);
console.log(surname);
console.log(region);

// DESTRUCTURING FOR ARRAYS

const charArr = ["a", "b", "c", "d", "e", "f"];

// const third = charArr[2]
const [first, , third, ...rest] = charArr;
console.log(first);
console.log(rest);

// DESTRUCTURING FUNCTION PARAMETERS

const personFn = function ({ name, surname, location: { city } }) {
  console.log(name);
  console.log(surname);
  console.log(city);
};

personFn(person);

// SPREAD OPERATOR

// PER STRINGHE
const str = "Epicode";
console.log([...str]);

// PER ARRAY
const charArr2 = ["h", "i", "j", "k", "l"];
const charArr3 = [...charArr, "g", ...charArr2];
console.log(...charArr3);

person3 = Object.assign({}, person); // vecchio metodo per fare shallow-copy (copia di primo livello)
// PER OGGETTI
const person2 = {
  ...person,
  location: { ...person.location, region: "FVG" },
  name: "Stefano",
  surname: "Miceli",
  planet: "Earth"
};

console.log(person);
console.log(person2);
