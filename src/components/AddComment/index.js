import styles from './AddComment.module.css'
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
            <form className={styles.form}>
                <input
                className={styles.commentInput}
                id="content"
                type="content"
                value={content}
                onChange={(e) => {
                setContent(e.target.value);
              }}
                />
                <div className={styles.buttonsContainer}>
                    <button onClick={handleSubmit}>Comment</button>
                    <button onClick={handleCommenting}>Close</button>
                </div>
            </form>
        )}
        </div>
    )
}