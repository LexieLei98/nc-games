import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header';
import { Nav } from './components/Nav'
import { Reviews } from './components/Reviews';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<Reviews />}/>
        <Route path='/reviews' element={<Reviews />}/>
      </Routes>
    </div>
  );
}

export default App;
