//import logo from './logo.svg';
//import './App.css';
import Regform from "./regform";
import LogIn from "./loginform";
import SignIn from "./signinform";
import Form from "./layout";
import { BrowserRouter,Route,Routes } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Form/>}>
      <Route index element={<Regform/>}></Route>
      <Route path="logIn" element={<LogIn/>}></Route>
      <Route path="signin" element={<SignIn/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
