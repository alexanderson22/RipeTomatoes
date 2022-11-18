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
      <input value={content} onChange={(e) => setContent(e.target.value)} />
    </form>
  );
}
