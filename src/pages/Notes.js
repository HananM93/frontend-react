
// import { Card, Container } from "react-bootstrap";
import { useParams, useNavigate } from "react-router";
import { useState } from "react";

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
    <div >
     
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
        <input type="submit" value="Update"/>
        <button id="DELETE" onClick={removeNote}>
        Delete
      </button>
      </form> 
    </div>
  )
}

export default Notes

