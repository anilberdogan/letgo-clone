import React from 'react'
import {Container,Row,Col,Button} from "reactstrap";
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import "./NavigationBar.css";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SearchBar from './SearchBar';
import {Link} from 'react-router-dom';


function NavigationBar() {

  return (
  <div className="py-3 shadow sticky-top bg-white">
    <Container>
      <Row className="d-flex justify-content-center">
        <Col>
          <Container fluid>
            <Row>
                <Link to='/'>
                <Col xs="auto" className='text-danger'>
                  <img src='https://venturebeat.com/wp-content/uploads/2018/07/1_RDCnRFpCJNXSgc1swCaLZw.png?fit=400%2C239&strip=all' width='72px' alt='resim' />
                </Col>
                </Link>
                <Col >
                  <SearchBar/>
                </Col>

                <Col  xs="auto" className="text-right text-danger" >
                  <Button className="rounded-pill px-3 mx-2 btn-danger"><CameraAltIcon fontSize="small"/> <strong>Sat</strong></Button>
                  <Button className="rounded-pill px-4 mx-2 btn-outline-danger"><strong >Giriş</strong></Button>
                  <IconButton className="mx-2">
                    <MenuIcon className="text-muted" fontSize="small" />
                  </IconButton>
                </Col>
              </Row>
              
            </Container>
          </Col>
        </Row>
    </Container>
  </div>
  )
}


export default NavigationBar
