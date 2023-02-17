import React, { useState } from "react";

function CreateArea(props) {
  let [inputnote, setinput] = useState({
    title: "",
    content: ""
  });

  function handleInput(event) {
    const { name, value } = event.target;
    setinput((prev) => {
      return { ...prev, [name]: value };
    });
  }
  function submitNode(event) {
    props.onAdd(inputnote);
    setinput({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleInput}
          placeholder="Title"
          value={inputnote.title}
        />
        <textarea
          name="content"
          onChange={handleInput}
          placeholder="Take a note..."
          rows="3"
          value={inputnote.content}
        />
        <button onClick={submitNode}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
