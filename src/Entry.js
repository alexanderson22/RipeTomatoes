import { useState } from "react";

export default function Entry({ action }) {
  const [content, setContent] = useState("");

  function submit(e) {
    e.preventDefault();
    action(content);
    setContent("");
  }

  return (
    <form onSubmit={submit}>
      <input
        placeholder="Enter a movie"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    </form>
  );
}
