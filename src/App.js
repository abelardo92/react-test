import './App.css';
// rsc

//* var, let, const

// const test = 10;

// if(true) {
//   let test = 20;
//   console.log(test);
// }

// if(true) {
//   let test = 30;
//   console.log(test);
// }

//* Template strings
// const name = "Abelardo";
// const lastName = "Ramirez";
// const lastName2 = "Fuente";

// // const test = name.length + " " + lastName + " " + lastName2;
// const fullNameLength = () => name.length + lastName.length + lastName2.length;
// // const test = `Total characters of "${name} ${lastName} ${lastName2}": ${(name.length + lastName.length + lastName2.length)}`;
// const test = `Total characters of "${name} ${lastName} ${lastName2}": ${fullNameLength()}`;

// Spread syntax

const user = {
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

// const user2 = {
//   name: 'Abelardo',
//   lastName: 'Ramirez',
//   age: 30,
//   address: {
//     street: 'Cholul',
//     number: 350,
//     coordinates: {
//       x: '10.04867485',
//       y: '15.06748696',
//     },
//   },
// };

// const user2 = user;
// user2.address.street = "Francisco de Montejo";

const user2 = {
  ...user,
};

user2.address = {
  ...user.address,
  street: "Francisco de Montejo",
  coordinates: {
    x: "20.3523674237",
    y: "30.3523674237",
  }
};

// user2.address.coordinates = {
//   ...user.address.coordinates,
// };



// user2.address.street = "Francisco de Montejo";

// * hacer una copia del objeto cambiando unicamente las coordenadas "x" e "y"...

function App() {
  return (
    <div className="App">
      <code>
        <pre>
          {JSON.stringify(user, null, 2)}
          <br/><br/>
          {JSON.stringify(user2, null, 2)}
        </pre>
      </code>
    </div>
  );
}

export default App;
