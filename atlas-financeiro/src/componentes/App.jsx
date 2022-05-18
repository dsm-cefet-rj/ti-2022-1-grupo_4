import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Detalhamento from './Detalhamento';
import Perfil from './Perfi';
import Carteira from './Carteira';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/detalhamento" element={<Detalhamento />} />
        <Route path="/carteira" element={<Carteira />} />
      </Routes>
    </Router>
  );
}

export default App;