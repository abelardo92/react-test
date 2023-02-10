import { useEffect, useState } from 'react';
import './App.css';
// import { wait2Seconds } from './importPromise';
import { reqAPI, getUsers, wait2Seconds, wait2SecondsAsync } from './importPromise2';
// import { array, user, sayHello, sayHiToUser } from './importTest';


function Promise() {

    const [ test, setTest ] = useState('Loading...');
    const [ test2, setTest2 ] = useState('Example');
    const [ users, setUsers ] = useState([]);

    const waitPlease = async (showError) => {
        try {
            const result = await wait2SecondsAsync(showError);
            setTest(`then: ${result}`);
        } catch (error) {
            setTest(`catch: ${error}`)
        }

        try {
            const { data: {data: users} } = await reqAPI.get('/users/10');
            setUsers(users);
        } catch ({message}) {
            setUsers(message);
        }
        setTest2('Example2');
    };

    useEffect(() => {
        // wait2Seconds(true)
        // // promiseTest
        // .then((result) => setTest(`then: ${result}`))
        // .catch((error) => setTest(`catch: ${error}`));

        // const result = waitPlease(false);
        waitPlease(true);
        // setTest(`then: ${result}`);

        // setTest2('Example2');

        
    },[]);

  return (
    <div className="App">
      <code>
        <pre>
            {test}
            <br/>
            {test2}
            <br/>
          {JSON.stringify(users, null, 2)}
        </pre>
      </code>
    </div>
  );
}

export default Promise;