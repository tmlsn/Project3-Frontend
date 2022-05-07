import { AuthContext } from "../../context";
import { useState, useContext, useEffect } from "react";
import { Comment } from "../Comment";

export function SeeComments(post) {
    const { seeComments, comments, deleteComment } = useContext(AuthContext);
    
    useEffect(() => {
        seeComments(post._id)
    },[])
    
    return <div>
        {comments.map((comment) => {
            return <Comment {...comment} key={comment._id}/>
           
        })}
    </div>

}