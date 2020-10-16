import React from 'react'
import { Container, Row, Col } from "reactstrap"
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import HouseIcon from '@material-ui/icons/House';
import WeekendIcon from '@material-ui/icons/Weekend';

import './CategoryCards.css'

function CategoryCards() {

    return (
        <div className="py-4">
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col className="p-0">
                        <Container fluid>
                        <Row>
                            <h4>Kategoriye göre ara 👀</h4></Row>
                            <Row className="text-center">
                                <Col className="p-2">
                                    <div className="bg-blue text-light catCard" >
                                        <PhoneIphoneIcon />
                                    </div>
                                    <h6 className="pt-2">Elektronik</h6>
                                </Col>
                                <Col  className="p-2">
                                    <div className="bg-green text-light catCard">
                                        <DriveEtaIcon />
                                    </div>
                                    <h6 className="pt-2">Araba</h6>
                                </Col>
                                <Col  className="p-2">
                                    <div className="bg-deepblue text-light catCard">
                                        <SportsBasketballIcon />
                                    </div>
                                    <h6 className="pt-2">Spor</h6>
                                </Col>
                                <Col  className="p-2">
                                    <div className="bg-orange text-light catCard">
                                        <MotorcycleIcon />
                                    </div>
                                    <h6 className="pt-2">Motor</h6>
                                </Col>
                                <Col  className="p-2">
                                    <div className="bg-yellow text-light catCard">
                                        <WeekendIcon />
                                    </div>
                                    <h6 className="pt-2">Ev ve Bahçe</h6>
                                </Col>
                                <Col  className="p-2">
                                    <div className="bg-pink text-light catCard">
                                        <PhotoCameraIcon />
                                    </div>
                                    <h6 className="pt-2">Moda</h6>
                                </Col>
                                <Col  className="p-2">
                                    <div className="bg-lightblue text-light catCard">
                                        <ChildFriendlyIcon />
                                    </div>
                                    <h6 className="pt-2">Bebek ve Çocuk</h6>
                                </Col>
                                <Col  className="p-2">
                                    <div className="bg-purple text-light catCard">
                                        <HouseIcon />
                                    </div>
                                    <h6 className="pt-2">Emlak</h6>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CategoryCards
