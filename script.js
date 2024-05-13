// homeworkk N1 შევქმნათ ყველა მარტივი ტიპის ცვლადი რაც ვისწავლეთ

let userName = "Mariam";
let age = 25;
let hasHobbie = true;
console.log("Hello, I am " + userName + " and I am " + age + " years old.");

//homework-2 არითმეტიკული ოპერაციები

let x = 15;
let y = 5;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

//homework-3 სტრინგების კონკატენაცია

let job = "Diplomat";
let at = "Automenu";
let fullDescription = "Hello, I am a" + job + " " + "at" + " " + at;
console.log(fullDescription);
let subject = "front end";
let homeWork = `studying ${subject}`;
console.log(homeWork);

//homework-4 გამოთვალეთ მართკუთხედის ფართობი 

let length = 7;
let width = 5;
let area = length * width;
console.log(area);

// კოდი ითვლის ყველა რიცხვის ჯამს numbersArray მასივში.

const numbersArrayFirst = [20, 30, 40, 60, 85];
let sumFirst = 0;
for (let i = 0; i < numbersArrayFirst.length; i++) {
  sumFirst = sumFirst + numbersArrayFirst[i];
}
console.log(sumFirst);

//კოდი ახდენს მასივის ინიციალიზებას:

const peopleArray = [
  { name: "Mariam", age: 25, address: "Tbilisi" },
  { name: "David", age: 33, address: "Batumi" },
  { name: "Keso", age: 1, address: "Kutaisitz" },
];

// ეძებს და ბეჭდავს ინფორმაციას პირველი პირის შესახებ peopleArray-ში.

console.log(
  "My name is " +
    peopleArray[0].name +
    ", My age is " +
    peopleArray[0].age +
    ", My address is " +
    peopleArray[0].address
);

// ამოწმებს, არის თუ არა მეორე პირის ასაკი 25 წელზე ნაკლები. თუ ასეა, იბეჭდება "I am a teenager"; წინააღმდეგ შემთხვევაში იბეჭდება "I am an adult"
if (peopleArray[1].age < 25) {
  console.log("I am a teenager");
} else {
  console.log("I am an adult");
}

// კოდი იმეორებს რიცხვების მასივის თითოეულ ელემენტს და ბეჭდავს თითოეულ ელემენტს კონსოლში.

const numbers = [9, 2, 33, 49, 60];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//  switch-ის ბრძანება

const currentDay = new Date().getDay();
switch (currentDay) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("პარაFriday");
    break;
  case 6:
    console.log("Saturday");
}

//კოდი ბეჭდავს ნომრებს 1-დან 99-მდე კონსოლში

for (let i = 1; i <= 99; i++) {
  console.log(i);
}

//კოდი ბეჭდავს რიცხვებს 1-დან 60-მდე while გამოყენებით.

let i = 1;
while (i <= 60) {
  console.log(i);
  i++;
}

// სხვადასხვა მანიპულაციები

// მასივის ინიციალიზაცია პიროვნების ოთხი სახელით
let namesArray = ["ana", "sali", "lika", "kato", "nita"];

// საწყისი მასივის ჩვენება
console.log(namesArray);

// ბოლო პიროვნების მასივიდან ამოღება და განახლებული მასივის ჩვენება
let removedLastPerson= namesArray.pop();
console.log(namesArray);

// პირველი პიროვნების მასივიდან ამოღება და განახლებული მასივის ჩვენება
let removedFirstPerson = namesArray.shift();
console.log(namesArray);

// "tata" მასივის დასაწყისში დამატება და განახლებული მასივის ჩვენება
namesArray.unshift("tata");
console.log(namesArray);

// "lana" მასივის ბოლოს დამატება და განახლებული მასივის ჩვენება
namesArray.push("lana");
console.log(namesArray);

//მეორე პიროვნების მასივიდან წაშლა, tuta-ით შეცვლა და განახლებული მასივის ჩვენება.
delete namesArray[1];
namesArray[1] = "tuta";
console.log(namesArray);

// მასივი  numbersArray, რომელიც შეიცავს 1-დან 999-მდე რიცხვების კვადრატებს.

let numbersArray = [];
for (let i = 1; i <= 999; i++) {
  numbersArray.push(i * i);
}
console.log(numbersArray);

//while ლუპი

let numbersArrayWhile = [];
let j = 1;
while (j <= 999) {
  numbersArrayWhile.push(j * j);
  j++;
}
console.log(numbersArrayWhile);

//do while ლუპი

let numbersArrayDoWhile = [];
let k = 1;
do {
  numbersArrayDoWhile.push(k * k);
  k++;
} while (k <= 999);
console.log(numbersArrayDoWhile);

//  კოდი ითვლის ყველა რიცხვის ჯამს numbersTwoArray მასივში.

let numbersTwoArray = [5, 13, 58, 63, 19];
let sum = 0;
for (let i = 0; i < numbersTwoArray.length; i++) {
  sum += numbersTwoArray[i];
}
console.log(sum);

// t ფუნქცია, oddOrEven, განსაზღვრავს მოცემული რიცხვი x კენტია თუ ლუწი.

function oddOrEven(x) {
  if (x % 2 === 0) {
    console.log("False");
  } else {
    console.log("True");
  }
}
oddOrEven(2);
oddOrEven(9);
oddOrEven(11269);
oddOrEven(2584);

//  სტრიქონს გარდაქმნის მცირე ასოზე toLowerCase() მეთოდის გამოყენებით.

function toLowerCase(str) {
  return str.toLowerCase();
}
let lowerCaseString = toLowerCase("MY NAME IS MARIAM");
console.log(lowerCaseString);

// filterEvenNumbers, ფილტრავს ლუწი რიცხვებს რიცხვების მასივიდან filter() მეთოდის გამოყენებით.

function filterEvenNumbers(numbers) {
  return numbers.filter(function (number) {
    return number % 2 === 0;
  });
}

let numbersFilterArray = [220, 369, 379, 4128, 2222, 986];
let evenNumbersArray = filterEvenNumbers(numbersFilterArray);
console.log(evenNumbersArray);

// Homework N2 1. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს და დააბრუნებს true -ს თუ რიცხვი  არის 3ის ჯერადი , ხოლო თუ არაა მაშნ false-ს

function isMultipleOf3(number) {
  if (number % 3 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isMultipleOf3(99));
console.log(isMultipleOf3(63));
console.log(isMultipleOf3(33));
console.log(isMultipleOf3(119));
console.log(isMultipleOf3(149));
console.log(isMultipleOf3(222));

// 2. დაწერეთ ფუნქცია, getCurrencySymbolFromCode რომელიც პარამეტრად მიიღებს ვალუტის კოდს (USD ან EUR ან GEL) სტრინგის სახით და დააბრუნებს ამ კოდის შესაბამის სიმბოლოს ($, €, ლ) თუ ისეთი კოდს გადავცემ რომლის სიმბოლოც არ მაქვს დააბრუნოს კოდი.

function getCurrencySymbolFromCode(currencyCode) {
  const symbols = { USD: "$", EUR: "€", GEL: "l" };
  if (currencyCode in symbols) {
    return symbols[currencyCode];
  } else {
    return "Code";
  }
}
console.log(getCurrencySymbolFromCode("USD"));
console.log(getCurrencySymbolFromCode("EUR"));
console.log(getCurrencySymbolFromCode("GEL"));
console.log(getCurrencySymbolFromCode("GBP"));

//3. დაწერეთ ფუნქცია, რომელიც მიიღებს lowerCase სტრინგს მაგ (my name is joe) და დააბრუნებს UpperCase (MY NAME IS JOE) სტრინგს.

function toUpperCase(str) {
  return str.toUpperCase();
}
let upperCaseString = toUpperCase("my name is mariam");
console.log(upperCaseString);

//4.  დაწერეთ ფუნქცია, რომელიც არგუმენტად მიიღებს გასაყიდ და ასაღებ ფასს, დათვლის მოგებას  და დააბრუნებს გასაყიდი ფასის რა პროცენტს შეადგენს მოგება.

function calculateProfitPercentage(sellingPrice, askingPrice) {
  const profit = sellingPrice - askingPrice;
  const profitPercentage = (profit / sellingPrice) * 100;
  return profitPercentage;
}

const sellingPrice = 200;
const askingPrice = 130;
console.log(calculateProfitPercentage(sellingPrice, askingPrice));

//5. დაწერეთ ფუნქცია, რომელიც მიიღებს რიცხვების მასივს და დააბრუნებს გაფილტრულ მასივს .filter სადაც მხოლოდ ლუწი რიცხვები იქნება.

function filterEvenNumbers(array) {
  const evenNumbers = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenNumbers.push(array[i]);
    }
  }
  return evenNumbers;
}

const numbersToFillter = [
  13, 2228, 369, 348, 2369, 658719, 225897, 697412, 697, 2000,
];
const evenNumbers = filterEvenNumbers(numbersToFillter);
console.log(evenNumbers);

//6. დაწერეთ ფუნქცია, რომელიც მიიღებს ობიექტების მასივს (ობიექტს უნდა ქონდეს ველი name) და მეორე პარამეტრად მიიღებს სტრინგს და ამ მასივში .find ით მოვძებნოთ ობიექტის name === ფუნქციის მეორე პარამეტრს და დავაბრუნოთ ნაპოვნი ობიექტი.

const objects = [
  { name: "audi", quantity: 1 },
  { name: "mercwdes", quantity: 9 },
  { name: "chevrolet", quantity: 0 },
];

function findObjectByName(objectsArray, name) {
  return objectsArray.find((obj) => obj.name === name);
}

let foundObject = findObjectByName(objects, "chevrolet");

if (foundObject) {
  console.log(foundObject);
} else {
  console.log("Object not found.");
}