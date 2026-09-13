abstract class Car {
    public model: string;
    public price: number;

    protected brand: string;
    protected year: number;

    constructor(brand: string, model: string, year: number, price: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.price = price;
    }

    abstract getCarInfo(): void;

    public startEngine(): void {
        console.log(`${this.brand} ${this.model}: двигун запущено.`);
    }
}

class Tesla extends Car {
    public batteryCapacity: number;
    private autopilotVersion: string;

    constructor(
        model: string,
        year: number,
        price: number,
        batteryCapacity: number,
        autopilotVersion: string
    ) {
        super("Tesla", model, year, price);
        this.batteryCapacity = batteryCapacity;
        this.autopilotVersion = autopilotVersion;
    }

    public getCarInfo(): void {
        console.log(`[Tesla] Модель: ${this.model} | Рік: ${this.year} | Ціна: $${this.price} | ` +
                    `Батарея: ${this.batteryCapacity} кВт·год | Автопілот: v${this.autopilotVersion}`);
    }
}

class BMW extends Car {
    public driveType: "RWD" | "AWD";
    protected hasMPackage: boolean;

    constructor(
        model: string,
        year: number,
        price: number,
        driveType: "RWD" | "AWD",
        hasMPackage: boolean
    ) {
        super("BMW", model, year, price);
        this.driveType = driveType;
        this.hasMPackage = hasMPackage;
    }

    public getCarInfo(): void {
        console.log(`[BMW] Модель: ${this.model} | Рік: ${this.year} | Ціна: $${this.price} | ` +
                    `Привід: ${this.driveType} | Пакет M-Sport: ${this.hasMPackage ? "Так" : "Ні"}`);
    }
}

class Toyota extends Car {
    public isHybrid: boolean;
    private vinNumber: string;

    constructor(
        model: string,
        year: number,
        price: number,
        isHybrid: boolean,
        vinNumber: string
    ) {
        super("Toyota", model, year, price);
        this.isHybrid = isHybrid;
        this.vinNumber = vinNumber;
    }

    public getCarInfo(): void {
        console.log(`[Toyota] Модель: ${this.model} | Рік: ${this.year} | Ціна: $${this.price} | ` +
                    `Гібрид: ${this.isHybrid ? "Так" : "Ні"} | VIN: ${this.vinNumber}`);
    }
}

const cars: Car[] = [
    new Tesla("Model S", 2023, 85000, 100, "12.3.6"),
    new Tesla("Model Y", 2022, 52000, 75, "11.4.9"),
    new BMW("M3", 2023, 76000, "RWD", true),
    new BMW("X5", 2021, 62000, "AWD", false),
    new Toyota("Camry", 2022, 28000, true, "JT2BF28K901234"),
    new Toyota("RAV4", 2020, 26000, false, "JT3HP10V410987")
];

console.log("=== Список автомобілів ===");
for (const car of cars) {
    car.getCarInfo();
    car.startEngine();
    console.log("----------------------------------------");
}
