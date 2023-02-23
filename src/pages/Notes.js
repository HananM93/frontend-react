
// import { Card, Container } from "react-bootstrap";
import { useParams, useNavigate } from "react-router";
import { useState } from "react";
import { Container } from "react-bootstrap";

const Notes = ({ notes, updateNotes, deleteNotes }) => {
  const { id } = useParams();
  const note = notes.find((note) => note.id === parseInt(id));
  const navigate = useNavigate();
  const [editForm, setEditForm] = useState(note);

  const handleChange = (evt) => {
    setEditForm({
      ...editForm,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    updateNotes(editForm, id);
    navigate("/create");
  };

  const removeNote = () => {
    deleteNotes(id);
    navigate("/create");
  };
  return (
    <Container >
     
      <h1>{note.title}</h1>
      <h2>{note.body}</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={editForm.title}
          onChange={handleChange}
        />
      <input
          type="text"
          name="body"
          placeholder="body"
          value={editForm.body}
          onChange={handleChange}
        />
        <input style={{backgroundColor: "rgb(173, 137, 38)"}} type="submit" value="Update"/>
        <button style={{backgroundColor: "rgb(173, 137, 38)"}} id="DELETE" onClick={removeNote}>
        Delete
      </button>
      </form> 
    </Container>
  )
}

export default Notes

