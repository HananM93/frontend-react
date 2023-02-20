import React from "react";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
const Create = ({setNotes}) => {
  const [form, setForm] = useState({ title: "", text: "" });

  function handleChange(event) {
    const {value,name} = event.target
    setForm({...form, [name]:value })
    
  }
  
  function addNote() {

  }

  return (
    <Container>
      <Form className="mt-5" style={{ width: " 45%" }}>
        <Form.Group className="mb-3">
          <Form.Label className="">Title</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={form.title}
            name="title"
            type="email"
            placeholder="Enter title"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Text</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={form.text}
            name="text"
            type="text"
            placeholder="Enter text"
          />
        </Form.Group>
      </Form>
      <Button type="button" class="btn btn-primary">Button</Button>
    </Container>
  );
};

export default Create;
