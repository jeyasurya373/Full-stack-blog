import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";



export default function Topbar() {

    const { user, dispatch } = useContext(Context)

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    }




    return (
        <div className="top">
            <div className="topleft">
                <i className="topicon fab fa-facebook-square"></i>
                <i className="topicon fab fa-twitter-square"></i>
                <i className="topicon fab fa-instagram-square"></i>

            </div>
            <div className="topcentre">
                <ul className="toplist">
                    <li className="toplistiteam">
                        <Link className="link" to="/" >HOME</Link>
                    </li>
                    <li className="toplistiteam" > <Link className="link" to="/About" >ABOUT</Link></li>
                    {/* // <li className="toplistiteam"><Link className="link" to="/" >CONTACT</Link></li> */}
                    <li className="toplistiteam"><Link className="link" to="/write" >WRITE</Link></li>
                    <li className="toplistiteam" onClick={handleLogout}>{user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className="topright">
                {
                    user ? (
                        <Link to="/settings">
                            <img className="topimg"
                                src={user.profilepic}
                                alt=""
                            />
                        </Link>
                    ) : (
                        <ul className="toplist">
                            <li className="toplistiteam">
                                <Link className="link" to="/login">LOGIN</Link>
                            </li>
                            <li className="toplistiteam">
                                <Link className="link" to="/register">REGISTER</Link>
                            </li>
                        </ul>
                    )
                }

                <i className="topsearchicon fas fa-search"></i>
            </div>

        </div>
    )
}
