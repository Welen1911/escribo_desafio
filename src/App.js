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
      <div class="max-w-sm mx-auto mt-5">
        <div class="mb-5">
          <label for="number" class="block mb-2 text-sm font-medium text-gray-900 ">Digite um número:</label>
          <input type="number" onChange={(e) => setNum(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="ex: 1" required />
        </div>
        <div>
          <button onClick={() => calcular()} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Calcular</button>
        </div>
        <div class="mb-5 mt-5">
          <div>
            {total > 0 ? "Total: " + total : ""}

          </div>
        </div>
        <div class="mb-5">
          {lista.length > 0 ?
            <div>
              Valores:
              <ul>
                <li>{lista.map((valor) =>
                  valor + "; "
                )}</li>
              </ul>
            </div>
            : ""}
        </div>
      </div >

    </>
  );
}

export default App;
