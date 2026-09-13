interface Payable {
    pay(): void;
}

abstract class Employee {
    public name: string;
    public age: number;
    public salary: number;

    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    abstract getAnnualBonus(): number;
}

class Developer extends Employee implements Payable {
    constructor(name: string, age: number, salary: number) {
        super(name, age, salary);
    }

    getAnnualBonus(): number {
        return this.salary * 0.10;
    }

    pay(): void {
        console.log(` ${this.name}: заробітна плата $${this.salary}.`);
    }
}

class Manager extends Employee implements Payable {
    constructor(name: string, age: number, salary: number) {
        super(name, age, salary);
    }

    getAnnualBonus(): number {
        return this.salary * 0.20;
    }

    pay(): void {
        console.log(`${this.name}: заробітна плата менеджера $${this.salary}.`);
    }
}

const employees: Employee[] = [
    new Developer("Богдан", 25, 3000),
    new Developer("Оксана", 28, 3500),
    new Manager("Андрій", 35, 5000),
    new Manager("Ірина", 40, 6000),
];

console.log("=== Список ===");
let totalBonuses = 0;

for (const emp of employees) {
    const bonus = emp.getAnnualBonus();
    totalBonuses += bonus;

    console.log(`Співробітник: ${emp.name}, || ${emp.age} || $${emp.salary} || $${bonus}`);

    if ("pay" in emp && typeof (emp as Payable).pay === "function") {
        (emp as Payable).pay();
    }
    console.log("-----------------------------------------");
}

console.log(totalBonuses);
