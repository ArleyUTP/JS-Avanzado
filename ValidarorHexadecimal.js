function validar(colorhexadecimal) {
  const expreg = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  return expreg.test(colorhexadecimal);
}

console.log(validar("#FFA07A")); // true
console.log(validar("#FFF"));    // true
console.log(validar("#1234"));   // false
console.log(validar("#FFF232")); // true