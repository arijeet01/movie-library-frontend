import React, {useState} from "react";
import Signinsignup from "../container/Signinsignup";
import "../App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
const apikey=process.env.REACT_APP_MOVIE_API_KEY;

function App() {

  const [user, setUserLogin]=useState();
  if (typeof(user) != "undefined")
  localStorage.setItem('user', JSON.stringify(user));
  
  const user_var=localStorage.getItem('user');

   const Logout=()=>{
    localStorage.removeItem('user');
    window.location.reload();
  };

  return (
    <div className="App">
         <BrowserRouter>
          <Routes>
            <Route path="/"  element={<Signinsignup setUserLogin={setUserLogin} />} />
            <Route path="/home"  element={ user_var ? <Home user={JSON.parse(user_var)} apikey={apikey} Logout={Logout}/>: <Signinsignup setUserLogin={setUserLogin} />} />
          </Routes>
         </BrowserRouter>
         
    </div>
  );
}

export default App;
export {apikey};
