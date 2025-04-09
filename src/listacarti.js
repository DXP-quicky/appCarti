import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Carte from "./carte";

const ListaCarti = (props) => {
    const lista = props.listaCarti.map(item => {
        const { coperta, titlu, descriere, autor, pret, id } = item;  //  Am destructurat obiectul "item"
        return (
            <Col key={id}>
                <Carte coperta={coperta} titlu={titlu} descriere={descriere} autor={autor} pret={pret} />
            </Col>
        )
    }
    );

    return (
        <Container>
            <Row xs="auto" className="justify-content-sm-center">
                {lista}
            </Row>
        </Container>
    )
}

export default ListaCarti;