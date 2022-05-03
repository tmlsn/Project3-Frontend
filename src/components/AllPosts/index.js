import { AuthContext } from "../../context";
import { useState, useContext, useEffect } from "react";
import { Post } from "../Post";

export function AllPosts() {
    
    const { allPosts, posts } = useContext(AuthContext);
    
    
    useEffect(() => {
        allPosts()
    },[])
    console.log(posts)

    return <div>
        {posts.map((post) => {
            return <Post key={post._id} {...post}/>
           
        })}
    </div>
}