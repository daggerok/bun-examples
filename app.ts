interface User {
    name: string,
    age: number,
}

function greet(user: User): string {
    return `Hello, ${user.name}, as far as I can see you are ${user.age} years old!`;
}

console.log(
    greet({name: 'Maksimko', age: 39})
)
