import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import star from "../assets/star.png"

const DevicePage = () => {
    const device = {
        id: 1,
        name: 'Iphone 12 Pro',
        price: 25000,
        rating: 5,
        img: `https://assets.swappie.com/cdn-cgi/image/width=600,height=600,dpr=2,fit=contain,format=auto/swappie-iphone-12-pro-max-pacific-blue.png?v=11`
    }
    const description = [
        {id: 1, title: 'Оперативная память', description: '5ГБ'},
        {id: 2, title: 'Камера', description: '5нм'},
        {id: 3, title: 'Процессор', description: 'A15'},
        {id: 4, title: 'Ядра', description: '2'},
        {id: 5, title: 'Аккумулятор', description: '4000'}
    ]
    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2 style={{textAlign: "center"}}>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{
                                background: `url(${star}) no-repeat center center`,
                                width: 240,
                                height: 240,
                                backgroundSize: 'cover',
                                fontSize: 64
                            }}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>От: {device.price}$</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;