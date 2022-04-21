import { AuthContext } from "../../context";
import { useState, useContext, useEffect } from "react";

export function Post(post) {

    const { deletePost, user, allPosts } = useContext(AuthContext);
    const handleDelete = () => {
        console.log(post.user, user._id)
        if(post.user === user._id){
            deletePost(post._id)
            /* allPosts() */
        } 
        
    }
    
            return <div>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <span>{post.createdAt} </span>
                <button onClick={handleDelete}>Delete</button>
            </div>
        
}