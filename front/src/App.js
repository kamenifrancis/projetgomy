import './App.css'; 
import Register from './component/register/Register';
import Login from './component/login/Login';
import PrivateRoute from './component/privateRoute/PrivateRoute'
import { Routes,Route } from 'react-router-dom'; 
import Navba from './component/navbar/Navbar';
const App = ()=> {
  return (
    <div className="App"> 
<Navba/>
     <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/app/Private' element={<PrivateRoute/>}/>
    
      
     </Routes>
    </div>
  );
}

export default App;
