import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header';
import Login from './Components/Login';
import AddProduct from './Components/AddProduct';
import Registration from './Components/Registration';
import UpdateProduct from './Components/UpdateProduct';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/login' element={ <Login/>}/>
          <Route path='/edit' element={ <UpdateProduct/>}/>
          <Route path='/add' element={ <AddProduct/>}/>
          <Route path='/register' element={ <Registration/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
