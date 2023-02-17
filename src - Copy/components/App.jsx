import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setnodes] = useState([]);
  function addNode(node) {
    setnodes((prevnode) => {
      return [...prevnode, node];
    });
  }
  function deleteitem(id) {
    setnodes((prevnode) => {
      return prevnode.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNode} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteitem}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
