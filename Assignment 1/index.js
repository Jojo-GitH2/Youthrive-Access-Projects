function calculateArea(length, width) {
    // Area for a Rectangle is length * width
    return length * width;
}

function reverseString(str) {
    // Reversing a string
    return str.split("").reverse().join("");
}

function isEven(number) {
    return number % 2 === 0;
}

let area = calculateArea(65, 40);
console.log(area);

let reversedString = reverseString("Jonah");
console.log(reversedString);

let isEvenNumber = isEven(10);
console.log(isEvenNumber)