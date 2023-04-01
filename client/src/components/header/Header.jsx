import Logo from "../assests/instaclone.svg";
import Camera from "../assests/camera.gif";
import { useNavigate } from "react-router-dom";
import "../postview.css";


const Header = () => {
    let Navigate = useNavigate();

    const LogOutHandler = (e) => {
        localStorage.setItem('authorization', '');
        Navigate('/');
    }
    return (
        <>
            <div className="nav">
                <a href="/dashboard"> <img src={Logo} alt="insta-logo" id="logo" title="Go to Home Page"></img></a>
                <a href="./postform"><img src={Camera} alt="camera" id="camera" title="Post now your memories!"></img></a>
                <div className='logout'><button id='b-logout' type="submit" onClick={(e)=> LogOutHandler(e)} >LOGOUT</button></div>
            </div>
        </>
    )
}
export default Header;