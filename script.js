let score = 0;

const add = (n1, n2) => {
  score = n1 + n2;
  if (score % 2 === 0) {
    sayEven(score);
  } else {
    sayOdd(score);
  }
}

const sayEven = (num) => {
  console.log(`Liczba ${num} jest parzysta.`);
}

const sayOdd = (num) => {
  console.log(`Liczba ${num} jest nieparzysta.`);
}

add(2, 1);