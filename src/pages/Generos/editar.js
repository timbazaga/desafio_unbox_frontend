import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import GeneroService from "../../services/Generos/generos.service";
import {Redirect} from "react-router-dom";


export default class EditarGenero extends Component {

    state = {
        id: '',
        descricao: ''
    }

    constructor(props) {
        super(props);
        const {id} = this.props.match.params;
        GeneroService.recuperar(id).then(response => {
            this.setState({
                id: id,
                descricao: response.data.descricao
            });
        });
    }

    submitForm = (event) => {
        const {...genero} = this.state;
        console.log(genero, 'FormularioSubmetido')
        GeneroService.atualizarGenero(genero).then(response => {
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
                            Editar
                        </Button>
                    </form>
                </Container>
            </div>
        );
    }
}
