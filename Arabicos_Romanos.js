function arabicoRomano(num) {
    if (!Number.isInteger(num) || num < 1 || num > 3999999) {
        throw new Error("Número debe ser un entero entre 1 y 3,999,999");
    }
    const valores = [
        [1000000, "M̅"], [900000, "C̅M̅"], [500000, "D̅"], [400000, "C̅D̅"],
        [100000, "C̅"], [90000, "X̅C̅"], [50000, "L̅"], [40000, "X̅L̅"],
        [10000, "X̅"], [9000, "I̅X̅"], [5000, "V̅"], [4000, "I̅V̅"],
        [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
        [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
        [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]
    ];

    return valores.reduce((ac, [valor, simbolo]) => {
        const repetir = Math.floor(num / valor);
        num %= valor;
        return ac + simbolo.repeat(repetir);
    }, "");
}
console.log(arabicoRomano(12433));