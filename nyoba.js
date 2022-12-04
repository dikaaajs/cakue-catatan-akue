const vertikal = 8;

// sumbu y
for (let i = 1; i <= vertikal; i++) {
  // sumbu x
  let temp = 0;
  for (let j = 1; j <= i; j++) {
    temp += i;
    process.stdout.write(`${temp} `);
  }
  // enter
  console.log(" ");
  temp = 0;
}
