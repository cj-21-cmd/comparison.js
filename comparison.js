let firstFavNum = 19;
let secondFavNUm = 21;

//Use comparison operators and store the results in variables
let isGreaterThan = firstFavNum > secondFavNUm;
console.log("Is firstFavNum greater than secondFavNum?", isGreaterThan);

let isLessThan = firstFavNum < secondFavNUm;
console.log("Is firstFavNum less than secondFavNum?", isLessThan);

let isGreaterThanOrEqualTo = firstFavNum >= secondFavNUm;
console.log("Is firstFavNum greater than or equal to secondFavNum?", isGreaterThanOrEqualTo);

let isLessThanOrEqualTo = firstFavNum <= secondFavNUm;
console.log("Is firstFavNum less than or equal to secondFavNum?", isLessThanOrEqualTo);

let isStrictlyEqual = firstFavNum === secondFavNUm;
console.log("Is firstFavNum strictly equal to secondFavNum?", isStrictlyEqual);

let isLooseEquality = firstFavNum == secondFavNUm;
console.log("Is firstFavNum sloose equality to secondFavNum?", isLooseEquality);
let isStrictlyInequality = firstFavNum !== secondFavNUm;
console.log("Is firstFavNum strictly inequality to secondFavNum?", isStrictlyInequality);

let isLooseInequality = firstFavNum != secondFavNUm;
console.log("Is firstFavNum loose inequality to secondFavNum?", isLooseInequality);


console.log("AND:", firstFavNum > 10 && secondFavNUm < 20); //true
console.log("OR:", firstFavNum < 10 || secondFavNUm > 20); //true
console.log("NOT:", !(firstFavNum === secondFavNUm)); //true
