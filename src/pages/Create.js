

import { Link } from "react-router-dom";
import { useState } from "react";
import { Container , Form } from "react-bootstrap";
const Create = ({notes, createNotes}) => {
  const [form, setForm] = useState({
    title: "",
    body: "",
  });
  
  const handleChange = (evt) => {
    setForm({
      ...form,
      [evt.target.name]: evt.target.value,
    });
  };


  const handleSubmit = (evt) => {
    evt.preventDefault();
    createNotes(form);
    setForm({
      title: "",
      body: "",
    });
  };

  // loaded function
  const loaded = () =>
    notes.map((note) => (
      <div key={note.id} className="note">
        <Link to={`/notes/${note.id}`}>
          <h1>{note.title}</h1>
        </Link>

        <h3>{note.body}</h3>
      </div>
    ));

  const loading = () => <h1>Loading...</h1>;


  return (
    
    <Container>
      <Form onSubmit={handleSubmit} className="mb-3" style={{width: "60%"}}>
      <Form.Group >
        <Form.Label>Title</Form.Label>
        <Form.Control onChange={handleChange} type='text' name="title" placeholder="title" value={form.title} />
      </Form.Group>
      <Form.Group >
        <Form.Label>Note</Form.Label>
        <Form.Control onChange={handleChange} type='text' name="body" placeholder="body" value={form.body} as="textarea" rows={3} />
      </Form.Group>
    </Form>
  <button >Add Note</button>
{notes ? loaded() : loading()} 

      </Container>
  )
}

export default Create
