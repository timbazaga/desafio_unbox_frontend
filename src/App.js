import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/header'
import Routes from "./arquitetura/routes";
import Container from "react-bootstrap/Container";

export default class App extends Component {
    render() {
        return (
            <div className={"App"}>
                <Header/>
                <Container fluid className="app-container">
                    <Routes/>
                </Container>
            </div>
        );
    }
}
