import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function createEntry(emojiTerm) {
  return(
    <Entry
    key = {emojiTerm.id}
    emoji = {emojiTerm.emoji}
    name = {emojiTerm.name}
    details = {emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
      {emojipedia.map(createEntry) }
      </dl>
    </div>
  );
}

export default App;
