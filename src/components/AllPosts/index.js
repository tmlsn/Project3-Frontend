import { AuthContext } from "../../context";
import { useState, useContext, useEffect } from "react";

export function AllPosts() {
    
    const { allPosts, posts } = useContext(AuthContext);
    const { deletePost } = useContext(AuthContext);
    
    useEffect(() => {
        allPosts()
    },[])
    console.log(posts)

    return <div>
        {posts.map((post) => {
            return <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <span>{post.createdAt} </span>
                <button onClick={deletePost}>Delete</button>
            </div>
        })}
    </div>
}