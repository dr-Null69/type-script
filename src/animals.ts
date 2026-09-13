interface Animal {
    name: string;
    age: number;
    
    move(): void;

    runSpeed?: number;
    maxFlyAltitude?: number;
    maxSwimDepth?: number;

    fly?(): void;
    swim?(): void;
}

class Cat implements Animal {
    name: string;
    age: number;
    runSpeed: number;

    constructor(name: string, age: number, runSpeed: number) {
        this.name = name;
        this.age = age;
        this.runSpeed = runSpeed;
    }

    move(): void {
        console.log(`${this.name} бігає бтстро ${this.runSpeed} км/год`);
    }

    makeSound(): void {
        console.log(`${this.name} нявчить: Мяу!`);
    }
}

class Bird implements Animal {
    name: string;
    age: number;
    maxFlyAltitude: number;

    constructor(name: string, age: number, maxFlyAltitude: number) {
        this.name = name;
        this.age = age;
        this.maxFlyAltitude = maxFlyAltitude;
    }

    move(): void {
        console.log(`${this.name} пересувається в повітрі.`);
    }

    fly(): void {
        console.log(`${this.name} летить на високо ${this.maxFlyAltitude} м`);
    }
}

class Fish implements Animal {
    name: string;
    age: number;
    maxSwimDepth: number;

    constructor(name: string, age: number, maxSwimDepth: number) {
        this.name = name;
        this.age = age;
        this.maxSwimDepth = maxSwimDepth;
    }

    move(): void {
        console.log(`${this.name} пересувається у воді.`);
    }

    swim(): void {
        console.log(`${this.name} плаває на глибині до ${this.maxSwimDepth} метрів.`);
    }
}


const myCat = new Cat("котя", 3, 15);
myCat.move();
myCat.makeSound();

console.log("-------------------");

const myBird = new Bird("птах", 2, 300);
myBird.move();
myBird.fly();

console.log("-------------------");

const myFish = new Fish("сільодка", 1, 50);
myFish.move();
myFish.swim();
