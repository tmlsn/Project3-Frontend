import { AuthContext } from "../../context";
import { useState, useContext, useEffect } from "react";


export function Comment(comment) {
    const [content, setContent] = useState(comment.content);
    const { user, seeComments,  editComment, deleteComment } = useContext(AuthContext);
    const [editing, setEditing] = useState(false)
    const [options, setOptions] = useState(false)
    const postId = comment.post


    const handleOptions = () => {
        setOptions((previousValue) => {
            return !previousValue
        })
    }

    const handleEditing = () => {
        setEditing((previousValue) => {
            return !previousValue
        })
    }

    const handleSave = () => {
        
        if(comment.user === user._id){
            editComment(content, comment)
            handleEditing();
        }  
    }

    const handleDelete = () => {
        if(comment.user === user._id){
            deleteComment(comment)
            
        }

    }



    return (
        <div>
        {!editing ? (
            <span>{content}</span>
        ):(
            <div>
            <input
                id="comment-content"
                type="comment-content"
                value={content}
                onChange={(e) => {
                setContent(e.target.value);
            }}
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={handleEditing}>Close</button>
            </div>
        )}
        
        <div>
            {user._id === comment.user ? (
                <button onClick={handleOptions}>...</button>
            ):(null)}
            {options ? ( 
                    <div>
                    <button onClick={handleEditing}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                    </div>
                ):(null)}
            </div>
        </div>
    )
}