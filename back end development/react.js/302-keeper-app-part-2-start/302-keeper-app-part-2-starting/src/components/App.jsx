import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

// Corrected the createNotes function to properly return JSX


function App() {
  return (
    <div>
      <Header />
      {notes.map((noteItem) => 
    <Note
      key={noteItem.id}
      title={noteItem.title}
      content={noteItem.content}
    />)}
      <Footer />
    </div>
  );
}

export default App;
