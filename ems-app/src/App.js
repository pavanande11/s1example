import { Container } from '@mui/material';
import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Trending from './pages/Trending/Trending';
import Movies from './pages/Movies/Movies';
import Series from './pages/Series/Series';
import Search from './pages/Search/Search';
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className="App">
      <SimpleBottomNavigation />
      <Container>
        <Routes>
          <Route path='/' element={<Trending />} exact/>
          <Route path='/movies' element={<Movies />} />
          <Route path='/search' element={<Search />} />
          <Route path='/series' element={<Series />} />

        </Routes>
        
      </Container>
    </div>
    </BrowserRouter>
  );
}

export default App;
