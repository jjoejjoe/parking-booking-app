import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from './images/p_logo.png';
import backgroundImage from './images/background.png';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/LoginPage";
import Booking from "./pages/Booking";
import ViewBooking from "./pages/ViewBooking";

export default function App() {
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        width: '100%'
    };

    return (
        <div style={backgroundStyle}>
            <BrowserRouter>
                <Navbar bg="dark" variant="dark" className="fixed-top">
                    <Container>
                        <Navbar.Brand href="/" style={{ color: 'blue' }}>
                            <img
                                src={logo}
                                className="d-inline-block align-top"
                                width="30"
                                height="30"
                            ></img>
                            NeoPark
                        </Navbar.Brand>
                        <Nav className="ms-auto">
                            <Nav.Link href="/viewparkingslot">
                                <Button variant="light">View Parking Slot</Button>
                            </Nav.Link>
                            <Nav.Link href="/viewbooking">
                                <Button variant="light">View Booking</Button>
                            </Nav.Link>
                            <Nav.Link href="/reservations">
                                <Button variant="light">Book Here</Button>
                            </Nav.Link>
                            <Nav.Link href="/login">
                                <Button variant="primary">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/reservations" element={<Booking />} />
                    <Route path="/viewbooking" element={<ViewBooking />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}