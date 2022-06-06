import React from 'react'
import { Form, Card, Button } from 'react-bootstrap'

const AddUser = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Card
                style={{
                    width: "22rem",
                    height: "25rem",
                    marginRight: "30px",
                    marginBottom: "20px",
                    marginTop: "30px",
                    backgroundColor: "white",
                    borderRadius: "8px",
                    border: "transparent",
                    boxShadow: "0 10px 10px 0 rgba(0,0,0,0.2)",
                }}
            >
                <Card.Header
                    style={{
                        borderTopRightRadius: "8px",
                        borderTopLeftRadius: "8px",
                        backgroundColor: "#277fa5",
                        color: "white",
                    }}
                >
                    Add New Contact
                </Card.Header>

                <Card.Body>
                    <Card.Text>
                        <Form>
                            <Form.Group controlId="formBasicEmail" style={{ textAlign: "left" }}>
                                <Form.Label >name :</Form.Label>
                                <Form.Control type="text" name="name" placeholder="Enter your name" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail" style={{ textAlign: "left" }}>
                                <Form.Label >email :</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter your email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail" style={{ textAlign: "left" }}>
                                <Form.Label >phone :</Form.Label>
                                <Form.Control type="text" name="phone" placeholder="Enter your phone" />
                            </Form.Group>
                        </Form>
                    </Card.Text>
                </Card.Body>
                <div className="buttons">
                    <Button variant="outline-primary edit-button">Add</Button>
                    <Button variant="outline-danger edit-button">Cancel</Button>
                </div>
            </Card>
        </div>

    )
}

export default AddUser