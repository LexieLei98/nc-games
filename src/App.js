import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header';
import { Nav } from './components/Nav'
import { Reviews } from './components/Reviews';
import { SingleReview } from './components/SingleReview'
import { Comments } from './components/Comments';
import { Error } from './components/Error'

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<Reviews />}/>
        <Route path='/reviews' element={<Reviews />}/>
        <Route path='/reviews/:review_id' element ={<SingleReview />} />
        <Route path='/reviews/:review_id/comments' element={<Comments/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
