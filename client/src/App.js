import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./home/home"
import Indexx from "./indexx/indexx";
import Login from "./Login/login";
import Signup from "./Signup/signup";
import Nfound from "./404/Nfound";
import Emailconform from "./emailconform/emailc"
import Passwordreset from './passreset/passrest';
import Setpassword from "./Setpassword/Setpassword";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path="" element={<Home />}>
          <Route index element={<Indexx />} />
        </Route>
        <Route path='/signup' element={<Signup />} />
        <Route path="*" element={<Nfound />} />
        <Route path="/conformmail" element={<Emailconform/>}/>
        <Route path="/password"  element={<Passwordreset/>}/>
       <Route path="/setpassword"  element={<Setpassword/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
