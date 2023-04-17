const sumar = require("./sumar");

test("Probar suma de dos enteros",()=>{
    expect(sumar(3,5)).toBe(8);
}
);