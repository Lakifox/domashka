//завдання 1
function greet(name) {
  console.log(`Привіт, ${name}!`);
}
greet("Андрій"); // Виведе: Привіт, Андрій!
greet("Олена");  // Виведе: Привіт, Олена!
greet("Іван");   // Виведе: Привіт, Іван!
//завдання 2
function sum(a, b) {
  return a + b;
}
console.log(sum(5, 7)); // Виведе: 12
console.log(sum(10, 20)); // Виведе: 30
console.log(sum(-3, 8)); // Виведе: 5
//завдання 3
const squareArray = (arr) => arr.map((num) => num * num);
console.log(squareArray([1, 2, 3, 4, 5])); // Виведе: [1, 4, 9, 16, 25]
//завдання 4
function calculate(num1, num2, operation) {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Ділення на нуль неможливе";
      }
      return num1 / num2;
    default:
      return "Невідома операція";
  }
}
//завдання 5
function filterLongWords(words, n) {
  return words.filter((word) => word.length > n);
}
console.log(filterLongWords(["яблуко", "банан", "ананас", "кіт", "сонце"], 5));
// Виведе: ["яблуко", "банан", "ананас"]