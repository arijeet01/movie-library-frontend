import React, {useState} from "react";
import Signinsignup from "../container/Signinsignup";
import "../App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
const apikey=process.env.REACT_APP_MOVIE_API_KEY;

function App() {

  const [user, setUserLogin]=useState();

  return (
    <div className="App">
         <BrowserRouter>
          <Routes>
            <Route path="/"  element={<Signinsignup setUserLogin={setUserLogin} />} />
            <Route path="/home"  element={user && user._id ? <Home user={user} apikey={apikey}/>: <Signinsignup setUserLogin={setUserLogin} />} />
          </Routes>
         </BrowserRouter>
         
    </div>
  );
}

export default App;
export {apikey};
