import { useState } from 'react';

const CatsExample = () => {
  const [cats, setCats] = useState([
    { name: 'Myshka', breed: 'Ragdoll' },
    { name: 'Malta', breed: 'Turkish Angora' },
  ]);

  const addCat = (newCat) => {
    // spread current cats array and newCat object into a new array
    const newCatsArray = [...cats, newCat];
    // call state setter function with this new array
    setCats(newCatsArray);
  };

  return (
    <div className="cats-example">
      <h2>Cats Example - Working with Arrays in State</h2>
      <button onClick={() => addCat({ name: 'Kira', breed: 'Ragamuffin' })}>
        Add Cat
      </button>
      <ul>
        {cats.map((cat, idx) => (
          <li key={idx}> {cat.name} - {cat.breed} </li>
        ))}
      </ul>
    </div>
  );
};

export default CatsExample;
