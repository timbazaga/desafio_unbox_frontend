import React, {Component} from 'react';
import Nav from "react-bootstrap/Nav";

class Navbar extends Component {


    constructor(props, context) {
        super(props, context);
        console.log(lista)
    }

    render(){
        return (
            <Nav variant="pills" defaultActiveKey="/filmes">
                <Nav.Item>
                    <Nav.Link href="/filmes">Filmes</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/series">Séries</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/populares">Populares</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/lancamentos">Lançamentos</Nav.Link>
                </Nav.Item>
            </Nav>
        );
    }
}

export default Navbar;
