import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Create from "../pages/Create";
import Notes from "../pages/Notes";
import Home from "../pages/Home";

const URL = "http://localhost:8000/notes/";

const Main = () => {
  const [notes, setNotes] = useState(null);

  // INDEX
  const getNotes = async () => {
    const data = await fetch(URL).then((res) => res.json());
    setNotes(data);
  };

   // CREATE
   const createNotes = async (note) => {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    getNotes();
  };
  // UPDATE
  const updateNotes = async (note, id) => {
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    })
    getNotes();
  };

    // DELETE
    const deleteNotes = async (id) => {
        await fetch(URL + id, { method: "DELETE" });
        getNotes();
      };
    
      useEffect(() => {
        getNotes();
      }, []);
    
      return (
        <main>
          <Routes>
            <Route
            path="/"element={<Home/>} 
            />
            
            <Route
              path="/notes"
              element={<Create notes={notes} createNotes={createNotes} />}
            />
            
            <Route
              path="/notes/:id"
              element={
                <Notes
                  notes={notes}
                  deleteNotes={deleteNotes}
                  updateNotes={updateNotes}
                />
              }
            />
          </Routes>
        </main>
      );
    }
export default Main;
