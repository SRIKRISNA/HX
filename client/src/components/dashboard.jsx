// import { useNavigate } from "react-router-dom";
import { useEffect, useState} from "react";
import "./postview.css";
import axios from "axios";
import Header from "../components/header/Header";

function Dashboard(){

    // let Navigate = useNavigate();
    
    const [userData, setPostData] = useState([]);
    useEffect(()=> {
        axios.get('http://localhost:5000/post/postform').then((res)=>{
            let data = res.data.reverse();
            console.log(data)
            setPostData(data);
        }).catch((err)=>{
            console.log(err)
        })
    }, []);

    function deletePost(_id) {
        axios.delete(`http://localhost:5000/post/delete/${_id}`).then((res) => {
            const newList = userData.filter((item) => item._id !== _id);
            setPostData(newList);
            console.log("post deleted");
        }).catch((err) => {
            console.log(err)
        })
    }

    return(
        <>
            <div className="container">
                <header>
                    <Header />
                </header>
                <div className="postContainer">
                    {
                        userData.map((post,i)=> {
                            return (
                                <div className="post">
                                    <div className="user-information" key={i}>
                                        <div id="name_location"><h3>{post.author}</h3>{post.location}</div>
                                        <span id="dots"><button onClick={() => deletePost(post._id)} id="delete_btn">X</button></span>
                                    </div>
                                    <div className="user-image">
                                        <img src={post.image} id="postimg" alt="user-defined-imge"></img>
                                    </div>
                                    <div className="user-meta">
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="user-likes">
                                        <div className="like_comment">
                                             <img src="../like.svg" alt="Likes" id="likes" width="20px"></img>
                                            <img src="../comment.svg" alt="Comments" id="comments" width="20px"></img>
                                        </div>
                                    {post.likes} likes
                                    </div>
                                    <div className="user-description">
                                       <strong>{post.description}</strong>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default Dashboard;