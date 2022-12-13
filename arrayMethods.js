const charArr = ["a", "b", "c", "d", "e", "f"];

// FOREACH
// cicla gli elementi di un array ed esegue la callback function lo stesso numero di volte quanti sono gli elementi nell'array

// charArr.forEach(function (elem) {
//   console.log(elem);
// });

// const forEach = function (callback) {
//   for (let i = 0; i < charArr.length; i++) {
//     const element = charArr[i];

//     callback(element);
//   }
// };
// forEach(charArr, function (elem) {
//   console.log("Abbiamo trovato", elem);
// });

charArr.forEach(elem => console.log("Abbiamo trovato", elem));

const arrWithNums = [0, 1, 2, 3, 4, 5];

let counter = 0;

arrWithNums.forEach(num => {
  counter += num;
});

console.log(counter);

const arrOfPeople = [
  {
    name: "Antonio",
    surname: "Vallerga",
    points: 100
  },
  {
    name: "Benedetto",
    surname: "M.",
    points: 150
  },
  {
    name: "Davide",
    surname: "Sberna",
    points: 300
  },
  {
    name: "Eleonora",
    surname: "Mattera",
    points: 500
  }
];

arrOfPeople.forEach(obj => {
  console.log(obj.name);
});
const surnamesOnly = arrOfPeople.map(obj => obj.surname);

console.log(surnamesOnly);

// MAP
// cicla un array e ne modifica gli elementi tornandoli in un nuovo array

const mapped = arrWithNums.map(num => num * 2);
console.log(mapped);

const mappedStrings = charArr.map(str => str.toLocaleUpperCase());
console.log(mappedStrings);

const newList = charArr.map(str => `<li>elemento: ${str}</li>`);

console.log(newList);

// const map = function (callback) {
//   const mapped = [];

//   for (let i = 0; i < arrWithNums.length; i++) {
//     const num = arrWithNums[i];

//     mapped.push(callback(num));
//   }

//   return mapped;
// };

// map(num => num * 2)

// FILTER
// cicla un array e inserisce in un nuovo array solo gli elementi che passano un test (solo quando la callback ritorna true). ritorna il nuovo array

const greaterThan3 = arrWithNums.filter(num => num >= 3);

console.log(arrWithNums);
console.log(greaterThan3);

const onlyCAndE = charArr.filter(str => str === "a" || str === "e");
console.log(onlyCAndE);

arrOfPeople
  .filter(personObj => personObj.name.includes("e"))
  .map(obj => obj.name)
  .forEach(str => {
    console.log(str);
  });

const filter = function (callback) {
  const filtered = [];

  for (let i = 0; i < arrOfPeople.length; i++) {
    const elem = arrOfPeople[i];

    if (callback(elem)) {
      filtered.push(elem);
    }
  }

  return filtered;
};

filter(personObj => personObj.name.includes("e"));

console.log(arrOfPeople.findIndex(obj => obj.surname.startsWith("S")));

//REDUCE

// accumulator accumula i valori ritornati dalla funzione
// ( se c'è initialValue prende quel valore inizialmente, se manca initialValue accumulator diventa il primo elemento dell'array)
// currentValue rappresenta l'elemento della corrente iterazione del ciclo

// IMPORTANTE: dovete tornare SEMPRE un valore dalla funzione
console.log(arrWithNums);
const reduced = arrWithNums.reduce((accumulator, currentValue) => {
  console.log(accumulator);
  console.log(currentValue);

  return accumulator + currentValue;
}, 0); // 0 è l'initial value

console.log(reduced);

const reducedPoints = arrOfPeople.reduce((acc, curr) => {
  console.log(acc);
  console.log(curr);
  return acc + curr.points;
}, 0); // 0 è l'initial value ed impedisce ad accumulator di diventare un oggetto al primo ciclo

console.log(reducedPoints);
