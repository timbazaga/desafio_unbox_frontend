import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import GeneroService from "../../services/Generos/generos.service";
import {Redirect} from "react-router-dom";


export default class NovoGenero extends Component {

    constructor(props) {
        super(props);
        this.state = {
            descricao: ''
        };
    }

    submitForm = (event) => {
        GeneroService.adicionarGenero(this.state).then(response => {
            this.setState({ redirect: "/generos" });
        });
        event.preventDefault();
    };

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
                [name]: value
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className={"genero-novo"}>
                <Container>
                    <form onSubmit={this.submitForm}>
                        <Form.Group>
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control type="text" placeholder="Descrição do Gênero" name={"descricao"} value={this.state.descricao}
                                          onChange={this.handleChange}/>
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
