import { AuthContext } from "../../context";
import { useState, useContext, useEffect } from "react";
import { Comment } from "../Comment";

export function SeeComments(post) {
    const { seeComments, comments } = useContext(AuthContext);
    
    useEffect(() => {
        seeComments(post)
    },[])
    console.log('cccccccccccccccccccccccccccccccc', post)
    console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',comments)

    return <div>
        {comments.map((comment) => {
            return <Comment {...comment}/>
           
        })}
    </div>

}