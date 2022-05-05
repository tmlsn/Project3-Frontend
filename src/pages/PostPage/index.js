import { Navbar } from '../../components/Navbar';
import { Post } from '../../components/Post';
import { SeeComments } from '../../components/SeeComments';
import { AuthContext } from "../../context";
import { useContext, useEffect } from "react";

export function PostPage() {
  const { getOnePost, post, setPost } = useContext(AuthContext);
  const url = window.location.pathname.split('/');
  const id = url[2]
  useEffect(() => {
    setPost(getOnePost(id))
},[])
  

  

    return (
    <>
    <div><Navbar /></div>
    <div><Post {...post} />
    </div>
    </>
    )
    
  }