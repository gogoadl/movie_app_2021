import React from 'react';


const datas = [
  { id : 1, name : "황지원" },
  { id : 2, name : "바보" },
  { id : 3, name : "사랑해" }
]

function Data({name}) {
  return (
  <div>
  <h1>I like {name} </h1>
  </div>
  )
}

function App() {
  return (
    <div className="App">
    {datas.map(names => <Data key={names.id} name ={names.name}></Data>)}
    </div>
  );
}

export default App;
