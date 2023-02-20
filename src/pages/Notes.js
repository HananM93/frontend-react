import React from "react";
import { Card } from "react-bootstrap";
const Notes = ({ notes }) => {
  return (
    <div>
      {notes.map((note) => (
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{note.title}</Card.Title>
            <Card.Text>{note.text}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Notes;
