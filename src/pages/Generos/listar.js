import React, {Component} from "react";
import Table from "react-bootstrap/Table";
import './generos.css';
import GeneroService from "../../services/Generos/generos.service";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";

export default class ListarGeneros extends Component {

    state = {
        generos: [],
        mostrarToastExclusao: false
    };

    componentDidMount() {
        this.carregarGeneros();
    }

    carregarGeneros = () => {
        GeneroService.listarGeneros().then(response => {
            this.setState({
                generos: response.data
            })
        });
    };

    deletarRegistro = (id) => {
        if(id) {
            GeneroService.excluir(id).then(response => {
                this.carregarGeneros();
                this.setState({
                    mostrarToastExclusao: true
                })
            });
        }
    };

    setToastExclusao = (isVisible) => {
        this.setState({
            mostrarToastExclusao: isVisible
        })
    };

    render() {
        const {generos} = this.state;
        let {mostrarToastExclusao}= this.state;
        return (
            <div className={"generos-listagem"}>
                <Row>
                    <Col>
                        <Button variant="primary" href={"/generos/new"}>+ Adicionar Gênero</Button>
                    </Col>
                </Row>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Descrição</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {generos.map(genero => (
                        <tr key={genero.id}>
                            <td>{genero.id}</td>
                            <td>{genero.descricao}</td>
                            <td>
                                <Row>
                                    <Col lg={{span: 2, offset: 8}}>
                                        <Button variant="outline-info" href={`/generos/${genero.id}`}>Editar</Button>
                                    </Col>
                                    <Col lg={2}>
                                        <Button variant="outline-danger" type={"button"}
                                                onClick={() => {this.deletarRegistro(genero.id)}}>Excluir</Button>
                                    </Col>
                                </Row>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                <Toast className={"app-toast"} onClose={() => this.setToastExclusao(false)} show={mostrarToastExclusao} delay={3000} autohide>
                    <Toast.Body>Registro excluído com sucesso.</Toast.Body>
                </Toast>
            </div>
        );
    }
};
