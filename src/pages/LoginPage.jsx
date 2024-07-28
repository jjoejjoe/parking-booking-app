import { Button, Card, Col, Container, Form, Modal, Row } from "react-bootstrap";
import logo from '../images/p_logo.png';
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signInWithPopup
} from "firebase/auth";

export default function Login() {
    const [modalShow, setModalShow] = useState(null);
    const handleShowSignUp = () => setModalShow("SignUp");
    const handleShowLogin = () => setModalShow("Login");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const auth = getAuth();
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        if (currentUser) navigate("/profile");
    }, [currentUser, navigate]);

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const res = await createUserWithEmailAndPassword(
                auth,
                username,
                password
            );
            console.log(res.user);
        } catch (error) {
            console.error(error);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, username, password);
        } catch (error) {
            console.error(error);
        }
    };

    const provider = new GoogleAuthProvider();
    const handleGoogleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error(error);
        }
    }

    const handleClose = () => setModalShow(null);

    return (
        <Container style={{ paddingTop: '100px' }}>
            <Row className="justify-content-center">
                <Col sm={8} className="mx-auto">
                    <Card className="my-3">
                        <Card.Body style={{ backgroundColor: '#f1f2f3' }} className="d-flex flex-column">
                            <div className="d-flex justify-content-between w-100">
                                <div className="text-left my-3 mx-3">
                                    <img src={logo} alt="Logo" style={{ width: '100px', marginBottom: '10px' }} />
                                    <p className="my-3" style={{ fontSize: '30px', color: '#333' }}>You need to sign in or create an account to continue.</p>
                                </div>
                                <div className="d-flex flex-column align-items-end">
                                    <Button className="rounded-pill my-3 mx-3" variant="outline-dark" style={{ width: '250px' }} onClick={handleGoogleLogin}>
                                        <i className="bi bi-google"></i> Sign in with Google
                                    </Button>
                                    <Button className="rounded-pill mb-3 mx-3" variant="outline-dark" style={{ width: '250px' }} onClick={handleShowLogin}>
                                        Sign in with Email
                                    </Button>
                                    <div className="mx-3" style={{ width: '250px', textAlign: 'center' }}>
                                        <p>or</p>
                                    </div>
                                    <Button className="rounded-pill mb-3 mx-3" style={{ width: '250px' }} onClick={handleShowSignUp}>
                                        Create an account
                                    </Button>
                                </div>
                            </div>
                            <hr className="mx-3" />
                            <div className="w-100 mt-3 text-center">
                                <p>By signing up, you agree to the Terms of Service and Privacy Policy including Cookie Use</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Modal
                    show={modalShow !== null}
                    onHide={handleClose}
                    animation={false}
                    centered
                >
                    <Modal.Body>
                        <h2 className="mb-4" style={{ fontWeight: "bold" }}>
                            {modalShow === "SignUp"
                                ? "Create your account"
                                : "Log in to your account"}
                        </h2>
                        <Form
                            className="d-grip gap-2 px-5"
                            onSubmit={modalShow === "SignUp" ? handleSignUp : handleLogin}
                        >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control
                                    onChange={(e) => setUsername(e.target.value)}
                                    type="email"
                                    placeholder="Enter email"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    placeholder="Enter password"
                                />
                            </Form.Group>
                            <p style={{ fontSize: "12px", textAlign: 'justify' }}>
                                By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use. NeoPark may use your contact information, including your email address and phone number for purposes outlines in our Privacy Policy, like keeping your account secure and personalising our services, including ads. Others will be able to find you by email or phone number, when provided, unless you choose otherwise here
                            </p>
                            <div className="d-flex justify-content-center">
                                <Button className="rounded-pill" type="submit">
                                    {modalShow === "SignUp" ? "Sign up" : "Log in"}
                                </Button>
                            </div>
                        </Form>
                    </Modal.Body>
                </Modal>
            </Row>
        </Container>
    )
}