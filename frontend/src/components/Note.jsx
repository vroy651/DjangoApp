// import React from "react";
//
// function Note({ note, deleteNote }) {
//   const formattedDate = new Date(note.created_at).toLocaleDateString("en-IND");
//   return (
// <div className="note-container">
{
  /* <h3 className="note-title">{note.title}</h3> */
}
{
  /* <p className="note-content">{note.content}</p> */
}
{
  /* <p className="note-date">{formattedDate}</p> */
}
{
  /* <button className="delete-button" onClick={() => deleteNote(note.id)}> */
}
{
  /* Delete */
}
{
  /* </button> */
}
{
  /* </div> */
}
//   );
// }
//
// export default Note;
//

import React from "react";
import "../styles/Note.css";

function Note({ note, onDelete }) {
  const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");

  return (
    <div className="note-container">
      <p className="note-title">{note.title}</p>
      <p className="note-content">{note.content}</p>
      <p className="note-date">{formattedDate}</p>
      <button className="delete-button" onClick={() => onDelete(note.id)}>
        Delete
      </button>
    </div>
  );
}

export default Note;
