import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { BrowserRouter as Router, Routes, Route, Navegate } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Cadastro/Login/Login';
import SignUp from '../pages/Cadastro/SignUp/SignUp';
import Perfil from '../pages/Perfil/Perfil';
import ListaDeAtivos from '../pages/ListaDeAtivos/ListaDeAtivos';
import Carteira from '../pages/Carteira/Carteira';
import DetalhamentoIndicadores from '../pages/Detalhamento/Detalhamento Indicadores';
import DetalhamentoCotacoes from '../pages/Detalhamento/Detalhamento Cotacoes';
import Watchlist from './Watchlist/Watchlist';


function App() {
  const [state, setState] = useState({visible: false});

  return (<>
            <Provider store={store}>
              <Router>
                <Routes>
                  <Route path="/" element={<Home state={state} setState={setState} />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/sign-up" element={<SignUp />} />
                  <Route path="/perfil" element={<Perfil />} />
                  <Route path='/carteira/:user_id' element={<Carteira />} />
                  <Route path="/detalhamento_cotacoes/:id" element={<DetalhamentoCotacoes />} />
                  <Route path="/detalhamento_indicadores/:id" element={<DetalhamentoIndicadores />} />
                  <Route path='/ativos' element={<ListaDeAtivos />} />
                  <Route path='/watchlist' element={<Watchlist />} />
                </Routes>
              </Router>
            </Provider>
          </>
  );
}

export default App;