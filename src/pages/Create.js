import React, { useState } from "react";

function Create() {
  // estados de creación
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [intro, setIntro] = useState("");
  const [completed, setCompleted] = useState(false);
  const [review, setReview] = useState("");

  return (
    <div>
      <form action="">
        <div></div>
      </form>
    </div>
  );
}

export default Create;
