export const array = [10, 15, 20, 25];

export const user = {
    name: 'Abelardo',
    lastName: 'Ramirez',
    age: 30,
    address: {
        street: 'Cholul',
        number: 350,
        coordinates: {
            x: '10.04867485',
            y: '15.06748696',
        },
    },
};

export const heroes = [
    {
        hero : 'Batman',
        name : 'Bruce Wayne',
        company : 'DC',
    },
    {
        hero : 'Iron Man',
        name : 'Tony Stark',
        company : 'Marvel',
    },
    {
        hero : 'Spiderman',
        name : 'Peter Parker',
        company : 'Marvel',
    },
    {
        hero : 'Superman',
        name : 'Clark Kent',
        company : 'DC',
    },
];

const a = 8;
const b = 26;

// arrow function...
// export const sayHello = () => {
//     return "Hello, nice to meet you";
// }
export const sayHello = () => "Hello, nice to meet you";

// export const sayHiToUser = (user) => {
//     const { name: userName, address: { street: streetTest } } = user;
//     return `Hello ${userName}, your street is ${streetTest}`;
// } 

export const sayHiToUser = ({ name, address: { street } }) => `Hello ${name}, your street is ${street}`;

export const abResult = a + b;