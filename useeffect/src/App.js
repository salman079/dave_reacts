import React, { useEffect, useState } from 'react';

function App() {
  const [value, setValue] = useState();
  useEffect(() => {console.log(value)});
  
  return (
    <div>
      <input type='text' onChange={(e) => { setValue(e.target.value) }}></input>
    </div>
  );
}

export default App;
