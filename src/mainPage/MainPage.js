import React from 'react'
import Card from "../global/Card"
import { Container, Row, Col } from "reactstrap"
import Products from "./Products"
import CategoryCards from "../global/CategoryCards"

function MainPage() {
    
    return (
        <div className='d-flex justify-content-center'>
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col>
                        <Container fluid>
                            <CategoryCards/>
                            <Products/>
                        </Container>

                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default MainPage

