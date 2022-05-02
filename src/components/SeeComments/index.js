import { AuthContext } from "../../context";
import { useState, useContext, useEffect } from "react";
import { Comment } from "../Comment";

export function SeeComments(post) {
    const { seeComments, comments, deleteComment } = useContext(AuthContext);
    console.log('jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj',post._id)
    useEffect(() => {
        seeComments(post._id)
    },[])
    console.log('cccccccccccccccccccccccccccccccc', post)
    console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',comments)
    
    
    return <div>
        {comments.map((comment) => {
            return <Comment {...comment} key={comment.id}/>
           
        })}
    </div>

}