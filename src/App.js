import { useState } from 'react';
import './App.css';
import { Form } from './Components/form';
import { Result } from './Components/result';
import { Values } from './Components/values';

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
      <div class="max-w-sm mx-auto mt-5">
        <Form setNum={setNum} onClick={calcular} placeholder={"ex: 1"} />
        <div class="mb-5 mt-5">
          <div>
            <Result total={total} />
          </div>
        </div>
        <div class="mb-5">
          <Values lista={lista} />
        </div>
      </div >

    </>
  );
}

export default App;
