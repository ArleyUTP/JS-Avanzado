function convertir(valor, desde, hasta) {
  const unidades = {
    bytes: 0,
    KB: 1,
    MB: 2,
    GB: 3,
    TB: 4,
    PB: 5,
    EB: 6,
    ZB: 7,
    YB: 8
  };
  if (!(desde in unidades) || !(hasta in unidades)) {
    throw new Error("Unidades inválidas");
  }

  const exp = unidades[desde] - unidades[hasta];
  return valor * 1024 ** exp;
}

console.log(convertir(1024, "KB", "MB"));