import { AuthContext } from "../../context";
import { useState, useContext, useEffect } from "react";
import { Comment } from "../Comment";

export function SeeComments(post) {
    const { seeComments } = useContext(AuthContext);
    
    const comments = useEffect(() => {
        seeComments(post)
    },[])
    console.log(comments)

    return <div>
        {comments.map((comment) => {
            return <Comment {...comment}/>
           
        })}
    </div>

}