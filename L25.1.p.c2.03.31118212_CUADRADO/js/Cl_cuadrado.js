export default class cuadrado {
    constructor(base) {
        this.base = base;
    }

    area() {
        return this.base * this.base;
    }

    perimetro() {
        return this.base * 4;
    }
}