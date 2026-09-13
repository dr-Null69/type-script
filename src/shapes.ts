interface Shape {
    getArea(): number;
    getPerimeter(): number;
    scale(factor: number): void;
}

class Circle implements Shape {
    private r: number;

    constructor(r: number) {
        this.r = r;
    }

    getArea(): number {
        return Math.PI * this.r * this.r;
    }

    getPerimeter(): number {
        return 2 * Math.PI * this.r;
    }

    scale(factor: number): void {
        this.r *= factor;
    }

    getr(): number {
        return this.r;
    }
}

class Rectangle implements Shape {
    private w: number;
    private h: number;

    constructor(w: number, h: number) {
        this.w = w;
        this.h = h;
    }

    getArea(): number {
        return this.w * this.h;
    }

    getPerimeter(): number {
        return 2 * (this.w + this.h);
    }

    scale(factor: number): void {
        this.w *= factor;
        this.h *= factor;
    }
}

class Triangle implements Shape {
    private a: number;
    private b: number;
    private c: number;

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter(): number {
        return this.a + this.b + this.c;
    }

    getArea(): number {
        const s = this.getPerimeter() / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }

    scale(factor: number): void {
        this.a *= factor;
        this.b *= factor;
        this.c *= factor;
    }
}

const shapes: Shape[] = [
    new Circle(5),
    new Rectangle(4, 6),
    new Triangle(3, 4, 5),
];

shapes.forEach((shape, index) => {
    console.log(index + 1);
    console.log(`  A: ${shape.getArea().toFixed(2)}`);
    console.log(`  P: ${shape.getPerimeter().toFixed(2)}`);
});

const scaleFactor = 2;
shapes.forEach((shape) => shape.scale(scaleFactor));

let totalArea = 0;
let totalPerimeter = 0;

for (const shape of shapes) {
    totalArea += shape.getArea();
    totalPerimeter += shape.getPerimeter();
}

console.log(`A all: ${totalArea.toFixed(2)}`);
console.log(`P all: ${totalPerimeter.toFixed(2)}`);
