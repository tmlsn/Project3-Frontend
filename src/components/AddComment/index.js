import { AuthContext } from "../../context";
import { useState, useContext, useEffect } from "react";

export function AddComment(post) {
    const { addComment } = useContext(AuthContext);
    const [commenting, setCommenting] = useState(false)
    const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(content, post);
    setContent('')
  };


    const handleCommenting = () => {
        setCommenting((previousValue) => {
            return !previousValue
        })
    }



    return (
        <div>
        {!commenting ? (
            <button onClick={handleCommenting} >Add a comment</button> 
        ):(
            <form>
                <input
                id="content"
                type="content"
                value={content}
                onChange={(e) => {
                setContent(e.target.value);
              }}
                />
                <button onClick={handleSubmit}>Comment</button>
                <button onClick={handleCommenting}>Close</button>
            </form>
        )}
        </div>
    )
}