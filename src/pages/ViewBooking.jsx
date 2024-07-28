import { Container, Card, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ViewBooking() {
    const location = useLocation();
    const navigate = useNavigate();
    const booking = location.state || {};

    const bookingData = booking || {
        location: '',
        date: '',
        time: '',
        duration: '',
    };

    const handleEdit = () => {
        navigate('/edit-booking', { state: bookingData });
    };

    return (
        <Container className="my-5" style={{ paddingTop: '50px' }}>
            <h1 className="text-center mb-4">View Booking</h1>
            <Card>
                <Card.Body>
                    <Card.Title>Booking Details</Card.Title>
                    <Card.Text>
                        <strong>Location:</strong> {bookingData.location}
                    </Card.Text>
                    <Card.Text>
                        <strong>Date:</strong> {bookingData.date}
                    </Card.Text>
                    <Card.Text>
                        <strong>Time:</strong> {bookingData.time}
                    </Card.Text>
                    <Card.Text>
                        <strong>Duration:</strong> {bookingData.duration} hours
                    </Card.Text>
                    <Button variant="primary" onClick={handleEdit}>
                        Edit Booking
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    );
}