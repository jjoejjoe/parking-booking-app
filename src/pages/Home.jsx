import { Col, Container, Row } from 'react-bootstrap';
import slogan from '../images/slogan.png';
import logo from '../images/logo.png';

export default function Home() {
    return (
        <Container className='d-flex flex-column justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
            <Row className='w-100'>
                <Col md={5} className='text-start'>
                    <img src={slogan} alt="Slogan" className='img-fluid' />
                    <p className='my-5' style={{ fontSize: 20, textAlign: 'justify' }}>NeoPark is a car parking booking app designed to make it easy and safe for customers to book their parking spots. With NeoPark, you can say goodbye to the hassle of searching for parking spaces and worrying about the safety of your vehicle. Our mission at NeoPark is to revolutionize the way people book car parking by providing a seamless and convenient experience. We envision a world where parking is no longer a stressful task, but a simple and efficient process for everyone.</p>
                </Col>
                <Col md={7} className='text-end'>
                    <img src={logo} alt="Logo" className='img-fluid' />
                </Col>
            </Row>
        </Container>
    );
}