import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from './images/p_logo.png';
import backgroundImage from './images/background.png';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/LoginPage";
import Booking from "./pages/Booking";
import ViewBooking from "./pages/ViewBooking";
import { AuthContext, AuthProvider } from "./components/AuthProvider";
import { useContext } from "react";

export default function App() {
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        width: '100%'
    };

    return (
        <AuthProvider>
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
                                <AuthLinks />
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
        </AuthProvider>
    );
}

function AuthLinks() {
    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return (
            <>
                <Nav.Link href="/viewparkingslot">View Parking Slot</Nav.Link>
                <Nav.Link href="/viewbooking">View Booking</Nav.Link>
                <Nav.Link href="/reservations">Book Here</Nav.Link>
                <NavDropdown title="Profile" id="collapsible-nav-dropdown">
                    <NavDropdown.Item href="/profile">Your Profile</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/login">Logout</NavDropdown.Item>
                </NavDropdown>
            </>
        );
    } else {
        return (
            <Nav.Link href="/login">
                <Button variant="primary">Login</Button>
            </Nav.Link>
        )
    }
}