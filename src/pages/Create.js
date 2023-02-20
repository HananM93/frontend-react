import React from "react";
import { useState } from "react";
import { Container, Form } from "react-bootstrap";
const Create = () => {
  
  return (
    <Container>
      <Form className="mt-5" style={{width:' 45%'}}>
        <Form.Group className="mb-3">
          <Form.Label className="">Title</Form.Label>
          <Form.Control type="email" placeholder="Enter title" />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Text</Form.Label>
          <Form.Control type="text" placeholder="Enter text" />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Create;
