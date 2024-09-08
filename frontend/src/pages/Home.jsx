// import { useEffect, useState } from "react";
// import api from "../api";
// import Note from "../components/Note";
//
// function Home() {
//   const [notes, setNotes] = useState([]);
//   const [content, setContent] = useState("");
//   const [title, setTitle] = useState("");
//
//   useEffect(() => {
// getNotes();
//   }, []);
//
//   const getNotes = async () => {
// try {
//   const res = await api.get("/api/notes/");
//   setNotes(res.data);
// } catch (error) {
//   console.log(error);
// }
//   };
//
//   const deleteNote = async (id) => {
// try {
//   const res = await api.delete(`/api/notes/delete/${id}/`);
//   setNotes(res.data);
// } catch (error) {
//   console.log(error);
// }
// getNotes();
//   };
//
//   const noteCreate = async (e) => {
// e.preventDefault();
// try {
//   const res = await api.post("/api/notes/", { title, content });
//   if (res.status === 200) {
// setTitle("");
// setContent("");
//   }
// } catch (error) {
//   console.log(error);
// }
// getNotes();
//   };
//
//   return (
// <div className="home-container">
{
  /* <div className="notes-container"> */
}
{
  /* <h2>NoteBook</h2> */
}
{
  /*  */
}
{
  /* {notes.map((note) => ( */
}
//   <Note note={note} deleteNote={deleteNote} key={note.id} />
// ))}
{
  /* </div> */
}
{
  /*  */
}
{
  /* <div className="create-note-container"> */
}
{
  /* <h2>Create Note</h2> */
}
{
  /* <form onSubmit={noteCreate}> */
}
{
  /* <label htmlFor="title">Title</label> */
}
{
  /* <br /> */
}
{
  /* <input */
}
// type="text"
// id="title"
// name="title"
// required
// onChange={(e) => setTitle(e.target.value)}
// value={title}
//   />
{
  /* <br /> */
}
{
  /* <label htmlFor="content">Content</label> */
}
{
  /* <br /> */
}
{
  /* <textarea */
}
// id="content"
// name="content"
// required
// onChange={(e) => setContent(e.target.value)}
// value={content}
//   />
// {
//   /* <br /> */
// }
// {
//   /* <button type="submit">Create</button> */
// }
// {
//   /* </form> */
// }
// {
//   /* </div> */
// }
// {
//   /* </div> */
// }
//   );
// }
//
// export default Home;
// aa

import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note";
import "../styles/Home.css";

function Home() {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    api
      .get("/api/notes/")
      .then((res) => res.data)
      .then((data) => {
        setNotes(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  const deleteNote = (id) => {
    api
      .delete(`/api/notes/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) alert("Note deleted!");
        else alert("Failed to delete note.");
        getNotes();
      })
      .catch((error) => alert(error));
  };

  const createNote = (e) => {
    e.preventDefault();
    api
      .post("/api/notes/", { content, title })
      .then((res) => {
        if (res.status === 201) alert("Note created!");
        else alert("Failed to make note.");
        getNotes();
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <div>
        <h2>Notes</h2>
        {notes.map((note) => (
          <Note note={note} onDelete={deleteNote} key={note.id} />
        ))}
      </div>
      <h2>Create a Note</h2>
      <form onSubmit={createNote}>
        <label htmlFor="title">Title:</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor="content">Content:</label>
        <br />
        <textarea
          id="content"
          name="content"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <br />
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default Home;
