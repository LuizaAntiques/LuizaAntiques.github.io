import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Rules from './components/Rules';
import Sala from './components/Sala';
import QuartoDoRafa from './components/QuartoDoRafa';
import Banheiro from './components/Banheiro';
import Suite from './components/Suite';
import Escritorio from './components/Escritorio';
import Cozinha from './components/Cozinha';
import Saida from './components/Saida';
import BaseDoMonstro from './components/BaseDoMonstro';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL || ''}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/sala" element={<Sala />} />
          <Route path="/quarto-do-rafa" element={<QuartoDoRafa />} />
          <Route path="/banheiro" element={<Banheiro />} />
          <Route path="/suite" element={<Suite />} />
          <Route path="/escritorio" element={<Escritorio />} />
          <Route path="/cozinha" element={<Cozinha />} />
          <Route path="/saida" element={<Saida />} />
          <Route path="/base-do-monstro" element={<BaseDoMonstro />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

