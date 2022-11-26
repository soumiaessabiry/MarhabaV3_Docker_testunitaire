import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Login"
import Register from "./component/Register"
import PhoneVerify from "./component/PhoneVerify"
import Dashbord from "./component/Dachbord"
import Error_page from "./component/Page_Error"
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/*' element={<Error_page/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/dashbord' element={<Dashbord/>}/>
          <Route path='/PhoneVerify' element={<PhoneVerify/>}/>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
