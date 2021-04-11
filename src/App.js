import React, { useState } from "react";

const App = () => {

  let time = new Date().toLocaleTimeString();
  const [ctime,newTime] = useState(time);
  
  const updateTime = () =>{
    time = new Date().toLocaleTimeString();
    newTime(time);
  }

  setInterval(updateTime,1000);
  
  return (
    <>
      <div className='time-div'>
      <h1 className='time-data'>{ctime}</h1>
      <p>Develpoed by : dk_vaja</p>
      </div>
    </>
  );
};

export default App;
