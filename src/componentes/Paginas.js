import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductosList } from "./Productos";
import Inicio from "./Inicio";

import { Header } from "./Header";
import { Carrito } from "./Carrito";
import { ProductosDetalles } from "./Productos/ProductosDetalles";


export const Paginas = () => {
  return (
    <section>
        <BrowserRouter>
        <Header/>
        <Carrito/>
            <Routes>
            
            <Route path="/" element={<Inicio/>} />
            <Route path="/productos" element={<ProductosList/>} />
            <Route path="/producto/:id" element={<ProductosDetalles/>} />
            </Routes>
        </BrowserRouter>
    </section>
  );
}