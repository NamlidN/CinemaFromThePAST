
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [datas, setD] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9999/api/seats/")
      .then(res => res.json())
      .then(data => {
        setD(data);
      });

  }, []);

const Arschritze = (wurst)=>{
  fetch(`http://localhost:9999/api/seats/${wurst}`,{
    method: "PUT",
    
  })
  .then(res => res.json())
  .then(data => {
    setD(data);
  });

}
const TNT = ()=>{
  fetch(`http://localhost:9999/api/seats/`,{
    method: "DELETE",
    
  })
  .then(res => res.json())
  .then(data => {
    setD(data);
  });

}
  return (

    <main>
          <div className='asdf'>
        <h1> {datas.filter(data=>!data.reserviert).length} Freie Plätze </h1>
      </div>
      
      {datas.map((i, key) => {
        return (
          <span style={{
            backgroundColor: i.reserviert ? "red" : "green"    
          }} onClick={()=>Arschritze(i.platz)} key={key}>
  
          </span>
        );
      })}
      <div className='asdf'>
  <button onClick={TNT}>Alles zurückSeTzEn</button>
  </div>
    </main>
  );
}

export default App;
