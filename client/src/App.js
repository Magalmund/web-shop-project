import React from 'react'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import ShopNavbar from "./components/ShopNavbar";


function App() {
  return (
    <BrowserRouter>
        <ShopNavbar/>
        <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
