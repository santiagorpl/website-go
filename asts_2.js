const numbers = [];
const fizzBuzz = [];

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    numbers.push(i);
  }
}

for (let number of numbers) {
  if (number % 3 === 0 && number % 5 === 0) {
    fizzBuzz.push("FizzBuzz");
  } else if (number % 3 === 0) {
    fizzBuzz.push("Fizz");
  } else if (number % 5 === 0) {
    fizzBuzz.push("Buzz");
  } else {
    fizzBuzz.push(number);
  }
}

// 2. menampilkan jumlah data pada numbers
console.log("Jumlah data numbers:", numbers.length);

// 3. menampilkan data indeks 23 pada numbers
console.log("Data numbers indeks 23:", numbers[23]);

// 4. menampilkan data indeks 7 pada fizzBuzz
console.log("Data fizzBuzz indeks 7:", fizzBuzz[7]);

// 5. menampilkan data indeks 10 pada fizzBuzz
console.log("Data fizzBuzz indeks 10:", fizzBuzz[10]);

// 6. menampilkan data indeks 25 pada fizzBuzz
console.log("Data fizzBuzz indeks 25:", fizzBuzz[25]);