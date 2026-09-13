function greetUser(s: string, n: number = 18): string {
    return s + ' ' + n;
}


let r: any = greetUser("ssdf");
console.log(r);

r = greetUser("df", 10);
console.log(r);