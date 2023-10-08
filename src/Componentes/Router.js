import React from "react";
import { Route, Routes, Navigate} from "react-router-dom";
import Home from './Home'
import Proyecto from './Proyecto'
import NuevoP from './nuevoproyecto'
export default function Router(){
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/proyecto" element={<Proyecto/>}></Route>
        <Route path="/nuevo" element={<NuevoP/>}></Route>
        <Route index path="*" element={<Navigate to={"/"}/>}></Route>
    </Routes>
}