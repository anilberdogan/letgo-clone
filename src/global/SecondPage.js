import React from 'react';
import "./SecondPage.css";
import { Row, Col, Container, Button } from 'reactstrap';
import { Input } from "reactstrap";
import "./NavigationBar.css";

function SecondPage() {
    return (
        <div className='p-5 second-page'>
            <Container >
                <Row className="d-flex justify-content-center">
                    <Col>
                        <img className='photo rounded' src='https://cdn.akakce.com/iv/8131/545/545868520z.jpg' alt='xd' />
                    </Col>
                    <Col>
                        <Row ><h2>₺30</h2></Row>
                        <Row><h3>Yangin Hortumu</h3></Row>
                        <Row><div className='seller border rounded '>

                            <h6 className="kullanici_adi">Kullanıcı</h6>
                            <p>Satıcıya mesaj at: </p>
                            <div className="text_area">
                                <Input type="text" id="message" className="message_input" placeholder="Kullanıcı ile mesajlaş" />
                                <Button className="rounded-pill px-3 mx-2 btn-danger"> <strong>Gönder</strong></Button>
                            </div>
                        </div>
                        </Row>
                        <Row><p className='desc my-5'> al tertemiz </p></Row>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SecondPage
