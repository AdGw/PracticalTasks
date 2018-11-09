function* factorial(n) {
  let current = 1;
  let total = 1;
  while (n >= current)
    yield total = current++ * total;
}

for (var n of factorial(5)) {
  console.log(n)
}