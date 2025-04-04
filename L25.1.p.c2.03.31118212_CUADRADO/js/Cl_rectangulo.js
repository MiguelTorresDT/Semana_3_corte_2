import cuadrado from "./Cl_cuadrado.js";

export default class rectangulo extends cuadrado {
    constructor(base, altura) {
        super(base);
        this.altura = altura;
    }

    area() {
        return this.base * this.altura;
    }

    perimetro() {
        return 2 * this.base + 2 * this.altura;
    }
}