import { AuthContext } from "../../context";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";

export function AddPost() {
    
    const { addPost } = useContext(AuthContext);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(title, content);
  };
    
    return <div>
        <form onSubmit={handleSubmit}>
        <h2>Create a Post</h2>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label htmlFor="content">Content:</label>
        <textarea
            id="content"
            type="content"
            value={content}
            onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <button>Create</button>
        </form>
    </div>
  }