import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Perfil from './Perfil';
import ListaDeAtivos from './ListaDeAtivos';
import Carteira from './reutilizaveis/Carteira';
import DetalhamentoIndicadores from './Detalhamento Indicadores';
import DetalhamentoCotacoes from './Detalhamento Cotacoes';

function App() {
  const [state, setState] = useState({visible: false});

  return (<>
            <Provider store={store}>
              <Router>
                <Routes>
                  <Route path="/" element={<Home state={state} setState={setState} />} />
                  <Route path="/perfil" element={<Perfil />} />
                  <Route path='/carteira-perfil' element={<Carteira />} />
                  <Route path="/detalhamento_cotacoes" element={<DetalhamentoCotacoes />} />
                  <Route path="/detalhamento_indicadores" element={<DetalhamentoIndicadores />} />
                  <Route path='/ativos' element={<ListaDeAtivos />} />
                </Routes>
              </Router>
            </Provider>
          </>
  );
}

export default App;