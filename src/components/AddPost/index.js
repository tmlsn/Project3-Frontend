import { AuthContext } from "../../context";
import { useState, useContext } from "react";


export function AddPost() {
    
    const { addPost, allPosts, user } = useContext(AuthContext);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(title, content);
    allPosts()
    setTitle('')
    setContent('')
  };
    
    return <div>
    {user ? (
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
        ) : (
          <h2>Create an account or log in to share a post!</h2>
        )} 
    </div>
  }