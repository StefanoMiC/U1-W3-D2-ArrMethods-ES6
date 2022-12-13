const now = new Date();

const year = now.getFullYear();
console.log(year);
const month = now.getMonth();
console.log(month);

const lastDayOfThisMonthObj = new Date(year, month + 3, 0);

const lastDayOfThisMonth = lastDayOfThisMonthObj.getDate();
console.log(lastDayOfThisMonth);

for (let i = 0; i < lastDayOfThisMonth; i++) {
  console.log("🔲");
}

const daysOfTheWeek = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];

const dayIndex = now.getDay();
console.log(daysOfTheWeek[dayIndex + 1]);

const today = now.getDate();
console.log(today);
const tomorrow = new Date();

tomorrow.setDate(today + 1);

const result1 = now.toLocaleString("it-IT", { weekday: "long" });
const result2 = tomorrow.toLocaleString("it-IT", { weekday: "long" });

// ES6
// INTERPOLAZIONE DI STRINGA ALT+96 (back tick)
console.log(`oggi è ${result1} e domani sarà ${result2}`);
