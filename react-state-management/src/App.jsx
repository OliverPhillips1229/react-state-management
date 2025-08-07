import { useState } from 'react';
import './App.css';
import CatsExample from './CatsExample.jsx';

const App = () => {
  const [mode, setMode] = useState('light');

  const handleMode = (modeValue) => {
    setMode(modeValue);
  };

  console.log('Our mode state is:', mode);

  const [information, setInformation] = useState({
    firstName: 'Oliver',
    lastName: 'Levine',
    hasPets: true,
    age: 32
  });

  console.log('My information is:', information);

  return (
    <>
      <div className={mode}>
        <h1>Hello world!</h1>
        <p>My name is {information.firstName} {information.lastName}.</p>
        <p>I am {information.age} years old.</p>
        <p>{information.hasPets ? 'I have pets.' : 'I do not have pets.'}</p>
        
        {/* Array State Management Example */}
        <CatsExample />
      </div>
      <div>
        <button onClick={() => handleMode('dark')}>Dark Mode</button>
        <button onClick={() => handleMode('light')}>Light Mode</button>
        <button onClick={() => handleMode('neon')}>Neon Mode</button>
        <button onClick={() => handleMode('night')}>Night Mode</button>
      </div>
    </>
  );
};

export default App;