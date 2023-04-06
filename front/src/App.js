import './App.css'; 
import Register from './component/register/Register';
import Login from './component/login/Login';
import PrivateRoute from './component/privateRoute/PrivateRoute'
import { Routes,Route } from 'react-router-dom'; 

const App = ()=> {
  return (
    <div className="App"> 
<h1>sdfghjklm</h1>
     <Routes>
      <Route path='/' element={<Register/>}/>
    
      
     </Routes>
    </div>
  );
}

export default App;
