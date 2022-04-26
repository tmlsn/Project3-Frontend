import { AuthContext } from "../../context";
import { useState, useContext, useEffect } from "react";
import { AddComment } from "../AddComment";

export function Post(post) {
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);
    const { deletePost, user, allPosts, likePost, unlikePost, findPost, editPost } = useContext(AuthContext);
    const [editing, setEditing] = useState(false)
    const [options, setOptions] = useState(false)
    

    const handleDelete = () => {
        console.log(post.user, user._id)
        if(post.user === user._id){
            deletePost(post._id)
            /* allPosts() */
        }  
    }

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
        console.log(post.user, user._id)
        if(post.user === user._id){
            editPost(title, content, post._id)
            handleEditing();
        }  
    }

    
    
    

     /* const handleLike = (post) => {
         console.log('rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr', user._id)
        if(post.likes.includes(user._id)){
            unlikePost(post._id)
            allPosts()
        } else {
            likePost(post._id)
            allPosts()
        }
    } */
    
            return <div>
            {!editing ?(
                <div>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <span>{post.createdAt} </span>
                {/* <button onClick={handleLike(post)}>{post.likes.length}</button> */}
                
                {!options ? (
                    <button onClick={handleOptions}>...</button>
                ):(
                    <div>
                    <button>Show the post</button>
                {user._id === post.user ? (
                    <button onClick={handleDelete}>Delete</button>
                ):(null)}
                {user._id === post.user ? (
                    <button onClick={handleEditing}>Edit</button>
                ):(null)}
                </div>
                )}
                </div> ):(
                    <div>
                    <input
                        id="title"
                        type="title"
                        value={title}
                        onChange={(e) => {
                        setTitle(e.target.value);
                        }}
                    />
                    <input
                        id="content"
                        type="content"
                        value={content}
                        onChange={(e) => {
                        setContent(e.target.value);
                        }}
                    />
                    <button onClick={handleEditing}>Cancel</button>
                    <button onClick={handleSave}>Save</button>
                    </div>
                )}
                <AddComment {...post} />
            </div>
        
}