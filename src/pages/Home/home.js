import React, {Component} from "react";
import './home.css';
import Col from "react-bootstrap/Col";

export default class Home extends Component {
    render() {
        return (
            <div className={"home"}>
                <Col>
                    <h1>Home Page</h1>
                </Col>
            </div>
        );
    }
};
