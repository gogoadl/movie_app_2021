import React from 'react';


function Data({name}) {
  return <h1>I like {name} </h1>
}


const datas = [
  { name : "황지원" },
  { name : "바보" },
  { name : "사랑해" }
]


function App() {
  return (
    <div className="App">
    {datas.map(names => <Data name ={names.name}></Data>)}
    </div>
  );
}

export default App;
