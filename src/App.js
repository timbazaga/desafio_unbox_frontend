import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./arquitetura/template/navegacao/Navbar";
import FilmeService from "./core/service/FilmeService";

function App() {

    let lista = new FilmeService().listar();
    console.log(lista);

    return (
        <div>
            <Navbar/>
            <h1>Hello World!!</h1>
        </div>
    );
}

export default App;
