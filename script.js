const add = (num1, num2) => {
  const score = num1 + num2;
  score % 2 === 0 ? sayEven(score) : sayOdd(score);
}

const sayEven = (score) => console.log(`Liczba ${score} jest parzysta.`);
const sayOdd = (score) => console.log(`Liczba ${score} jest nieparzysta.`);

add(2, 3);