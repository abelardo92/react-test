import './App.css';
// import { array, user, sayHello, sayHiToUser } from './importTest';
import { heroes } from './importTest';

// destructuring...
// const [ a, b, c ] = array;
// const { name: userName, address: { street: streetTest } } = user;
// const { street } = user.street;

// find, reduce, map, sort

// find....
const batman = heroes.find(({hero}) => hero === 'Batman');
// const batman = heroes.find(({company}) => company === 'DC');

// sort...
const orderedHeroes = heroes.sort(({company: companyA}, {company: companyB}) => {
    if (companyA > companyB) return -1;
    if (companyB > companyA) return 1;
    return 0;
  }
);

const heroNames = heroes.reduce((previousValue, {name}) => `${previousValue} ${name},`, '');

// const heroNamesArray = heroes.map(({name}) => name);
const heroNamesArray = heroes.map(({name, company}) => ({name, company}));

function TestClass2() {
  return (
    <div className="App">
      <code>
        <pre>
          {JSON.stringify(heroNamesArray, null, 2)}
          <br/><br/>
          {JSON.stringify(heroNames, null, 2)}
          <br/><br/>
          {JSON.stringify(batman, null, 2)}
          <br/><br/>
          {JSON.stringify(orderedHeroes, null, 2)}
        </pre>
      </code>
    {/* {a}
    <br/>
    {b}
    <br/>
    {c}
    <br/>
    {sayHiToUser(user)}
    <br/>
    {sayHello()} */}
      <code>
        <pre>
        </pre>
      </code>
    </div>
  );
}

export default TestClass2;