import './App.css';
import AppBarWithDrawer from './Componentes/AppBar';
import React from "react";
import { Route, Routes, Navigate} from "react-router-dom";
import Home from './Componentes/Home'
import Proyecto from './Componentes/Proyecto'
import NuevoP from './Componentes/nuevoproyecto'
function App() {
  return (
    // <div className="App">
    // <AppBarWithDrawer/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/proyecto" element={<Proyecto/>}></Route>
        <Route path="/nuevo" element={<NuevoP/>}></Route>
        <Route index path="*" element={<Navigate to={"/"}/>}></Route>
    </Routes>
    //  </div>
  );
}

export default App;
