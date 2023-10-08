import React from "react";
import { Route, Routes, Navigate} from "react-router-dom";
import Home from './Home'
import Proyecto from './Proyecto'

export default function Router(){
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/proyecto" element={<Proyecto/>}></Route>
        <Route index path="*" element={<Navigate to={"/"}/>}></Route>
    </Routes>
}