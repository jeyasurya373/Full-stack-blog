import { Link } from "react-router-dom"
import "./register.css"
import { useState } from 'react';
import axios from "axios";


export default function Register() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {

            const res = await axios.post("/auth/register", {
                username,
                email,
                password,
            });
            res.data && window.location.replace("/login")
        } catch (err) {
            setError(true)
        }


    };
    return (
        <div className="register">
            <span className="registertitle">Register</span>
            <form className="registerform" onSubmit={handleSubmit} >
                <label >Username</label>
                <input type="text" className="registerinput" placeholder="Enter Your Username"
                    onChange={e => setUsername(e.target.value)} />
                <label >Email</label>
                <input type="email" className="registerinput" placeholder="Enter Your Email"
                    onChange={e => setEmail(e.target.value)} />
                <label >Password</label>
                <input type="password" className="registerinput" placeholder="Enter Your Password"
                    onChange={e => setPassword(e.target.value)} />
                <button className="registerbutton" type="submit">Register</button>
                <button className="registerloginbtn">
                    <Link className="link" to="/login">LOGIN</Link>
                </button>
                {error && <span style={{ color: "red", marginTop: "10px ", left: "10px" }} >User already exist!</span>}
            </form>
        </div >
    )
}
