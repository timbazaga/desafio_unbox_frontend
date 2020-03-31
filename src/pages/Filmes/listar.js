import React, {Component} from "react";
import Table from "react-bootstrap/Table";
import './filmes.css';
import FilmeService from "../../services/Filmes/filmes.service";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";

export default class ListarFilme extends Component {

    state = {
        filmes: [],
        mostrarToastExclusao: false
    };

    componentDidMount() {
        this.carregarFilmes();
    }

    carregarFilmes = () => {
        new FilmeService().listarFilmes().then(response => {
            this.setState({
                filmes: response.data
            })
        });
    };

    deletarRegistro = (id) => {
        if(id) {
            FilmeService.excluir(id).then(response => {
                this.carregarFilmes();
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
        const {filmes} = this.state;
        let {mostrarToastExclusao}= this.state;
        return (
            <div className={"filmes-listagem"}>
                <Row>
                    <Col>
                        <Button variant="primary" href={"/filmes/new"}>+ Adicionar Filme</Button>
                    </Col>
                </Row>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Título Original</th>
                        <th>Gêneros</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {filmes.map(filme => (
                        <tr key={filme.id}>
                            <td>{filme.id}</td>
                            <td>{filme.titulo}</td>
                            <td>{filme.tituloOriginal}</td>
                            <td>
                                <ul>
                                    {filme.generos.map(genero => (
                                            <li key={genero.id}>
                                                {genero.descricao}
                                            </li>
                                        ))}
                                </ul>
                            </td>
                            <td>
                                <Row>
                                    <Col>
                                        <Button className={"botao-editar"} variant="outline-info" href={`/filmes/${filme.id}`}>Editar</Button>
                                        <Button className={"botao-editar"} variant="outline-danger" type={"button"}
                                                onClick={() => {this.deletarRegistro(filme.id)}}>Excluir</Button>
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
