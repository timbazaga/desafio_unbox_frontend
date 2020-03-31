import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FilmeService from "../../services/Filmes/filmes.service";
import {Redirect} from "react-router-dom";


export default class NovoFilme extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titulo: '',
            tituloOriginal: '',
            generos: []
        };
    }

    componentWillUnmount() {

    }

    submitForm = (event) => {
        console.log(this.state);
        new FilmeService().adicionarFilme(this.state).then(response => {
            console.log(response, "Resposta Inclusão");
            this.setState({ redirect: "/filmes" });
        });
        event.preventDefault();
    };

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name, value);
        this.setState({
                [name]: value
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className={"filme-novo"}>
                <Container>
                    <form onSubmit={this.submitForm}>
                        <Form.Group>
                            <Form.Label>Título</Form.Label>
                            <Form.Control type="text" placeholder="Título do Filme" name={"titulo"} value={this.state.titulo}
                                          onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Título Original</Form.Label>
                            <Form.Control type="text" placeholder="Título Original do Filme"
                                          name={"tituloOriginal"} value={this.state.tituloOriginal} onChange={this.handleChange}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Adicionar
                        </Button>
                    </form>
                </Container>
            </div>
        );
    }
}
