import './App.scss';
import { BrowserRouter , Routes,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Movies from './Components/Movies/Movies';
import Tvshow from './Components/Tvshows/Tvshow';
import Recentlyadded from './Components/Recentlyadded/Recentlyadded';
import Mylist from './Components/Mylist/Mylist';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/movies' element={<Movies />}></Route>
      <Route path='/tvshows' element={<Tvshow />}></Route>
      <Route path='/recentlyadded' element={<Recentlyadded />}></Route>
      <Route path='/mylist' element={<Mylist />}></Route>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
