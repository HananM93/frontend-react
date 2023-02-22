
// import { Card, Container } from "react-bootstrap";
import { useParams, useNavigate } from "react-router";
import { useState } from "react";
import List from "./List";

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
    navigate("/notes");
  };

  const removeNote = () => {
    deleteNotes(id);
    navigate("/notes");
  };
  return (
    <div >
      <List />
      <h1>{note.title}</h1>
      <h2>{note.body}</h2>
   
     
       <button id="DELETE" onClick={removeNote}>
        Delete
      </button>
      <form onSubmit={handleSubmit}>
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
        <input type="submit" value="Update"/>
      </form> 
    </div>
  )
}

export default Notes

