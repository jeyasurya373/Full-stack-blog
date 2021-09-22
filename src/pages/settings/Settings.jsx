import "./settings.css";
import Sidebar from '../../components/sidebar/Sidebar';
import { useContext } from 'react';
import { Context } from './../../context/Context';

export default function Settings() {
    const { user } = useContext(Context)
    return (
        <div className="settings">
            <div className="setttigswrapper">
                <div className="settingstitle">
                    <span className="settingsupdatetitle">Update Your Account</span>
                    <span className="settingsdeletetitle">Delete Account</span>
                </div>
                <form className="settingsform">
                    <label >Profile Picture</label>
                    <div className="settingspp">
                        <img src={user.profilepic} alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsppicon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} />
                    </div>
                    <label >Username</label>
                    <input type="text" placeholder="surya" />
                    <label >Email</label>
                    <input type="email" placeholder="surya@gmail.com" />
                    <label >Password</label>
                    <input type="password" />
                    <button className="settingsupdate">
                        Update
                    </button>
                </form>

            </div>
            <Sidebar />
        </div>
    )
}
