import logo from './logo.svg';
import './App.css';
import TabelaCotacoes from './cotacoes/Cotacoes';


const cotacoes = [
  {data: '11/05/2022', valor: 78.6},
  {data: '10/05/2022', valor: 75.7},
  {data: '09/05/2022', valor: 76.51},
  {data: '08/05/2022', valor: 79.94},
  {data: '07/05/2022', valor: 80.41},
  {data: '06/05/2022', valor: 81.9},
  {data: '05/05/2022', valor: 82.7},
  {data: '04/05/2022', valor: 83.09},
  {data: '03/05/2022', valor: 82.95},
  {data: '02/05/2022', valor: 84.14},
  {data: '01/05/2022', valor: 82.28},
]

function App(props) {
  return (
    <>
      <TabelaCotacoes cotacoes={cotacoes} />
    </>
  );
}

export default App;