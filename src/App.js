import { useState } from 'react';
import './App.css';

function App() {

  const [num, setNum] = useState(0);
  const [total, setTotal] = useState(0);
  const [lista, setLista] = useState([]);

  const calcular = () => {

    setLista([]);
    setTotal(0);

    for (let i = (num - 1); i > 0; i--) {
      if (i % 3 === 0 || i % 5 === 0) {
        setLista(l => [...l, i]);
        setTotal(t => t + i);
      }
    }
  }

  return (
    <>
      <div>
        Digite um número: <input type='number' onChange={(e) => setNum(e.target.value)} placeholder='ex: 1' />
        <button onClick={() => calcular()}>Calcular</button>
      </div>
      {lista.length > 0 ?
        <div>
          Valores:
          <ul>{lista.map((valor) => (
            <li key={valor}>{valor}</li>
          ))}</ul>
        </div>
      : ""}
      <div>
        {total > 0 ? "Total: " + total : ""}
      </div>
      
     
    </>
  );
}

export default App;
