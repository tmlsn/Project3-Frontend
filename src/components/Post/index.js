import styles from './Post.module.css'
import { AuthContext } from "../../context";
import { useState, useContext, useEffect } from "react";
import { AddComment } from "../AddComment";
import { SeeComments } from "../SeeComments";
import { Link, useNavigate } from "react-router-dom";


export function Post(post) {
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);
    const { deletePost, user, allPosts, likePost, unlikePost, findPost, editPost, getOnePost } = useContext(AuthContext);
    const [editing, setEditing] = useState(false)
    const [options, setOptions] = useState(false)
    const [seeComments, setSeeComments] = useState(false)

    const navigate = useNavigate();
    

    useEffect( () => {
        setTitle(post.title)
        setContent(post.content)
    },[post])

    const handleDelete = () => {
        if(post.user === user._id){
            deletePost(post._id)
            navigate("/")
            /* allPosts() */
        }  
    }

    const handleOptions = () => {
        setOptions((previousValue) => {
            return !previousValue
        })
        
    }

    const handleEditing = () => {
        getOnePost(post._id)
        setEditing((previousValue) => {
            return !previousValue
        })
    }

    const handleSave = () => {
        if(post.user === user._id){
            editPost(title, content, post._id)
            handleEditing();
        }  
    }

    const handleSeeComments = () => {
        setSeeComments((previousValue) => {
            return !previousValue
        })
    }

    const handleGetPost = () => {
        getOnePost(post._id)
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
    
            return <div className={styles.postAndCommentContainer}>
            {!editing ?(
                <div className={styles.postContainer}>
                <div className={styles.postHeader}>
                <h2>{post.user.firstName}</h2>
                {!options ? (
                    <button onClick={handleOptions}>Options</button>
                ):(
                    <div>
                    
                {user._id === post.user._id ? (
                    <button onClick={handleDelete}>Delete</button>
                ):(null)}
                {user._id === post.user._id ? (
                    <button onClick={handleEditing}>Edit</button>
                ):(null)}
                <button onClick={handleOptions}>Back</button>
                </div>
                )}
                </div>
                <h3><Link className={styles.postLink} to={`/post/${post._id}`} >{post.title}</Link></h3>
                <p>{post.content}</p>
                <span>{post.createdAt} </span>
                {/* <button onClick={handleLike(post)}>{post.likes.length}</button> */}
                
                </div> ):(
                    <div className={styles.postEditContainer}>
                    <input
                        id="title"
                        type="title"
                        value={title}
                        onChange={(e) => {
                        setTitle(e.target.value);
                        }}
                    />
                    <textarea
                        id="content"
                        type="content"
                        value={content}
                        onChange={(e) => {
                        setContent(e.target.value);
                        }}
                    />
                    <div className={styles.postEditBtns} >
                    <button onClick={handleEditing}>Cancel</button>
                    <button onClick={handleSave}>Save</button>
                    </div>
                    </div>
                )}
                <div className={styles.commentBtns}>
                <AddComment {...post} />
                {!seeComments ?(
                    <button onClick={handleSeeComments}>Show comments</button>
                    ):(
                        <div>
                        <div>
                        <button onClick={handleSeeComments}>Hide comments</button>
                        </div>
                        <div className={styles.commentsContainer}>
                    
                    
                    <SeeComments {...post} />
                    </div>
                    </div>
                    )}
                    </div>
                
            </div>
        
}