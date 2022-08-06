import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../paginas/login/Login";
import ListagemDeProdutos from "../paginas/listagemDeProdutos/ListagemDeProdutos";
import Compras from "../paginas/compras/Compras";
import Calendario from "../paginas/calendario/Calendario";
import { ChecarLogin } from "../checarLogin/ChecarLogin";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <ChecarLogin>
              <Login />
            </ChecarLogin>
          }
        />
        <Route exact path='/lista' element={<ListagemDeProdutos />} />
        <Route exact path='/compras' element={<Compras />} />
        <Route exact path='/calendario' element={<Calendario />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
