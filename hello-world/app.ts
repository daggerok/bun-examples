interface User {
    name: string,
    age: number,
}

function greet(user: User): string {
    return `Hello ${user.name}! As far as I can see you are ${user.age} years old!`;
}

console.log(
    greet({name: 'Maksimko', age: new Date().getFullYear() - 1983})
)
