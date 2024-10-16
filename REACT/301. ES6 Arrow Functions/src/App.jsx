import React from "react";
import Entry from "./components/Entry";
import emojipedia from "./components/emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map((emojiTerm) => (
          <Entry
            emoji={emojiTerm.emoji}
            name={emojiTerm.name}
            meaning={emojiTerm.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
