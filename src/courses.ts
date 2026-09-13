interface Course {
    name: string;
    durationHours: number;
    students: string[];
}

class OnlineCourse implements Course {
    public name: string;
    public durationHours: number;
    public students: string[];

    constructor(name: string, durationHours: number) {
        this.name = name;
        this.durationHours = durationHours;
        this.students = [];
    }

    isStudentRegistered(student: string): boolean {
        return this.students.includes(student);
    }

    registerStudent(student: string): void {
        if (this.isStudentRegistered(student)) {
            return;
        }
        this.students.push(student);
        console.log(`cтудента "${student}" успішно зараховано на курс "${this.name}".`);
    }
}

class CourseManager {
    private courses: Course[];

    constructor() {
        this.courses = [];
    }

    addCourse(course: Course): void {
        const existing = this.findCourse(course.name);
        if (existing) {
            console.log(`Курс із назвою "${course.name}" уже існує.`);
            return;
        }
        this.courses.push(course);
        console.log(`Курс "${course.name}" успішно додано до менеджера.`);
    }

    removeCourse(courseName: string): void {
        const initialLength = this.courses.length;
        this.courses = this.courses.filter(course => course.name.toLowerCase() !== courseName.toLowerCase());

        if (this.courses.length < initialLength) {
            console.log(`Курс "${courseName}" видалено.`);
        } else {
            console.log(`Курс "${courseName}" не знайдено для видалення.`);
        }
    }

    findCourse(courseName: string): Course | undefined {
        return this.courses.find(course => course.name.toLowerCase() === courseName.toLowerCase());
    }

    printAllCourses(): void {
        console.log("\n=== Список курсів та зареєстрованих студентів ===");
        if (this.courses.length === 0) {
            console.log("Список курсів порожній.");
            return;
        }

        for (const course of this.courses) {
            console.log(`Курс: "${course.name}" (${course.durationHours} год.)`);
            if (course.students.length === 0) {
                console.log("  Студенти: (поки що немає)");
            } else {
                console.log(`  Студенти (${course.students.length}): ${course.students.join(", ")}`);
            }
            console.log("-------------------------------------------------");
        }
    }
}

const manager = new CourseManager();

const tsCourse = new OnlineCourse("TypeScript Basics", 40);
const reactCourse = new OnlineCourse("React & Redux Advanced", 60);
const nodeCourse = new OnlineCourse("Node.js Backend", 50);

manager.addCourse(tsCourse);
manager.addCourse(reactCourse);
manager.addCourse(nodeCourse);

console.log("\n--- Реєстрація студентів ---");
tsCourse.registerStudent("Олексій Петренко");
tsCourse.registerStudent("Марія Іваненко");
tsCourse.registerStudent("Олексій Петренко");

reactCourse.registerStudent("Марія Іваненко");
reactCourse.registerStudent("Денис Коваль");

manager.printAllCourses();

console.log("\n--- Пошук курсу ---");
const found = manager.findCourse("TypeScript Basics");
console.log("Знайдено курс:", found ? found.name : "Не знайдено");

console.log("\n--- Видалення курсу ---");
manager.removeCourse("Node.js Backend");
manager.printAllCourses();
