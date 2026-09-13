import promptSync = require("prompt-sync");

const prompt = promptSync();

type CupSize = "small" | "large";
type Topping = "chocolate" | "caramel" | "berries";

const CUP_PRICES: Record<CupSize, number> = {
    small: 10,
    large: 25,
};

const TOPPING_PRICES: Record<Topping, number> = {
    chocolate: 5,
    caramel: 6,
    berries: 10,
};


function calculateIceCreamPrice(
    size: CupSize,
    toppings: Topping[],
): number {
    let totalPrice = CUP_PRICES[size];
    for (const topping of toppings) {
        totalPrice += TOPPING_PRICES[topping];
    }
    return totalPrice;
}

function orderIceCream(): void {

    let sizeInput = prompt("оберіть розмір ");
    while (sizeInput !== "1" && sizeInput !== "2") {
        console.log("невірний вибір");
        sizeInput = prompt("оберіть розмір ");
    }
    const selectedSize: CupSize = sizeInput === "1" ? "small" : "large";

    const selectedToppings: Topping[] = [];
    console.log("\nоберіть начинкит");
    console.log("1 - шоколад (+5 грн)\n2 - карамель (+6 грн)\n3 - ягоди (+10 грн)");

    while (selectedToppings.length === 0) {
        const toppingsInput = prompt("nОберіть начинкит ");
        const choices = toppingsInput.split(",").map((s) => s.trim());

        for (const choice of choices) {
            if (choice === "1" && !selectedToppings.includes("chocolate")) {
                selectedToppings.push("chocolate");
            } else if (choice === "2" && !selectedToppings.includes("caramel")) {
                selectedToppings.push("caramel");
            } else if (choice === "3" && !selectedToppings.includes("berries")) {
                selectedToppings.push("berries");
            }
        }

        if (selectedToppings.length === 0) {
            console.log("виберіть хоча б одну начинку");
        }
    }

    const total = calculateIceCreamPrice(selectedSize, selectedToppings);


    console.log(`pагальна вартість: ${total} грн`);
}


orderIceCream();