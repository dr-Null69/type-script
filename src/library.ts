interface LibraryItem {
    title: string;
    author: string;
    isBorrowed: boolean;
    borrow(): void;
}

class Book implements LibraryItem {
    public title: string;
    public author: string;
    public pagesCount: number;
    public isBorrowed: boolean;

    constructor(title: string, author: string, pagesCount: number) {
        this.title = title;
        this.author = author;
        this.pagesCount = pagesCount;
        this.isBorrowed = false;
    }

    borrow(): void {
        if (this.isBorrowed) {
            console.log(`[Недоступно] Книга "${this.title}" вже видана.`);
        } else {
            this.isBorrowed = true;
            console.log(`[Видано] Книга "${this.title}" (${this.pagesCount} стор.) успішно видана.`);
        }
    }
}

class Magazine implements LibraryItem {
    public title: string;
    public author: string;
    public issueNumber: number;
    public isBorrowed: boolean;

    constructor(title: string, author: string, issueNumber: number) {
        this.title = title;
        this.author = author;
        this.issueNumber = issueNumber;
        this.isBorrowed = false;
    }

    borrow(): void {
        if (this.isBorrowed) {
            console.log(`[Недоступно] Журнал "${this.title}" вип. №${this.issueNumber} вже позичений.`);
        } else {
            this.isBorrowed = true;
            console.log(`[Видано] Журнал "${this.title}" вип. №${this.issueNumber} успішно видано.`);
        }
    }
}

class DVD implements LibraryItem {
    public title: string;
    public author: string;
    public durationMinutes: number;
    public isBorrowed: boolean;

    constructor(title: string, author: string, durationMinutes: number) {
        this.title = title;
        this.author = author;
        this.durationMinutes = durationMinutes;
        this.isBorrowed = false;
    }

    borrow(): void {
        if (this.isBorrowed) {
            console.log(`[Недоступно] DVD "${this.title}" уже взяли.`);
        } else {
            this.isBorrowed = true;
            console.log(`[Видано] DVD "${this.title}" (${this.durationMinutes} хв.) успішно видано.`);
        }
    }
}

class Library {
    private items: LibraryItem[];

    constructor() {
        this.items = [];
    }

    addItem(item: LibraryItem): void {
        this.items.push(item);
        console.log(`Додано до бібліотеки: "${item.title}" (${item.author})`);
    }

    findItemByName(name: string): LibraryItem | undefined {
        return this.items.find(item => item.title.toLowerCase() === name.toLowerCase());
    }

    listAvailableItems(): void {
        console.log("\n=== Список доступних елементів у бібліотеці ===");
        const availableItems = this.items.filter(item => !item.isBorrowed);

        if (availableItems.length === 0) {
            console.log("Наразі немає доступних матеріалів.");
            return;
        }

        availableItems.forEach(item => {
            console.log(`• "${item.title}" — Автор/Режисер: ${item.author}`);
        });
    }
}

const library = new Library();

console.log("--- Наповнення бібліотеки ---");
const book1 = new Book("Кобзар", "Тарас Шевченко", 400);
const magazine1 = new Magazine("National Geographic", "Редакція NG", 215);
const dvd1 = new DVD("Інтерстеллар", "Крістофер Нолан", 169);

library.addItem(book1);
library.addItem(magazine1);
library.addItem(dvd1);

library.listAvailableItems();

console.log("\n--- Позичання матеріалів ---");
const searchTarget = library.findItemByName("Кобзар");
if (searchTarget) {
    searchTarget.borrow();
}

if (searchTarget) {
    searchTarget.borrow();
}

const dvdTarget = library.findItemByName("Інтерстеллар");
if (dvdTarget) {
    dvdTarget.borrow();
}

library.listAvailableItems();
