import React, { useState } from 'react';

function AddAndRemove() {
  const [inputValue, setInputValue] = useState('');
  const [list1, setList1] = useState([]);
  const [list2, setList2] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddToList1 = () => {
    if (inputValue.trim() !== '') {
      setList1([...list1, inputValue]);
      setInputValue('');
    }
  };

  const handleAddToList2 = (item) => {
    
   if(!list2.includes(item))
      setList2([...list2, item]);
  };

  const handleDeleteToList2 = (item)=>{
    setList2(list2.filter((i)=> i!== item))
  }

  return (
    <div className="App">
      <h1>Add Player</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e)=>setInputValue(e.target.value)}
          placeholder="Enter Player Name"
        />
        <button onClick={handleAddToList1}>Add</button>
      </div>

      {list1.length!==0 && <h2>Total Player</h2>}
      <ul>
        {list1.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleAddToList2(item)}>Add </button>
            <button onClick={() => handleDeleteToList2(item)}>Delete</button>
          </li>
        ))}
      </ul>

      {list2.length!==0 && <h2>Players Who will play</h2>}
      <ul>
        {list2.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddAndRemove;
