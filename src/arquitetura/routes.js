import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "../pages/Home/home";
import ListarFilme from "../pages/Filmes/listar";
import NovoFilme from "../pages/Filmes/novo";
import ListarGeneros from "../pages/Generos/listar";
import NovoGenero from "../pages/Generos/novo";
import EditarGenero from "../pages/Generos/editar";
import EditarFilme from "../pages/Filmes/editar";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={"/"} component={Home}/>
            <Route path={"/home"} component={Home}/>
            <Route exact path={"/filmes"} component={ListarFilme}/>
            <Route path={"/filmes/new"} component={NovoFilme}/>
            <Route path={"/filmes/:id"} component={EditarFilme}/>
            <Route exact path={"/generos"} component={ListarGeneros}/>
            <Route path={"/generos/new"} component={NovoGenero}/>
            <Route path={"/generos/:id"} component={EditarGenero}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;
