import React from "react";
import { Card, Container } from "react-bootstrap";
const Notes = ({ notes }) => {
  return notes?.map((note) => (
    <Container className="mt-3">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{note.title}</Card.Title>
            <Card.Text>{note.text}</Card.Text>

          </Card.Body>
        </Card>
    </Container>
    ));
};

export default Notes;


