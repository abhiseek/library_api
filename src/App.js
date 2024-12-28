import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import View from './components/View';
import Add from './components/Add';
import Search from './components/Search';
import Detail from './components/Detail';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      hello
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/view" element={<View />} />
        <Route path="/add" element={<Add />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
