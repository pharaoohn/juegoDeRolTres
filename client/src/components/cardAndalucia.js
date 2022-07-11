import React, { useEffects, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {

    const [cardsAndalucia, setCards] = useState([]);

    useEffects(() => {
        fetch('pruebasAndalucia')
            .then(res => res.json())
            .then(data => setCards(data))
    }, []);


    return (
        <div className="targetas">

            {cardsAndalucia ? cardsAndalucia.map((tarjeta, i) => {
                return (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                )
            }) : <div>Cargando...</div>}
        </div>
    )
}

export default BasicExample;