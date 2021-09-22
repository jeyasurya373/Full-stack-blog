import { useRef } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom"
import { Context } from "../../context/Context";
import "./login.css";
import axios from "axios";

export default function Login() {

    const userRef = useRef();
    const passwordRef = useRef()
    const { dispatch, isFetching } = useContext(Context)


    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            })
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" });
        }
    }


    return (

        <div className="login">
            <span className="logintitle">Login</span>
            <form className="loginform" onSubmit={handleSubmit}>
                <label >Username</label>
                <input type="text" className="logininput" placeholder="Enter Your username" ref={userRef} />
                <label >Password</label>
                <input type="password" className="logininput" placeholder="Enter Your Password" ref={passwordRef} />
                <button className="loginbutton" type="submit" disabled={isFetching}>Login</button>
                <button className="loginregbtn">
                    <Link className="link" to="/register">REGISTER</Link>
                </button>
            </form>
        </div>
    )
}
