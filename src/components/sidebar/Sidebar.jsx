import "./sidebar.css";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebariteam">
                <span className="sidebartitle">I AM</span>
                <img className="image"
                    src="https://insights.dice.com/wp-content/uploads/2018/03/Hipster-Developer-Dice.jpg" alt="" />
                <p>Jeya surya .A Software Engineer who loves to transform ideas into reality using coding.i have Good knowledge of MERN Stack, Cloud Aws, Software Development. I have Developed Projects like Ecommerce Application, Social Sites Website Using latest Technology like React.Js .</p>
            </div>
            <div className="sidebariteam">
                <span className="sidebartitle">
                    CATEGORIES
                </span>
                <ul className="sidebarlist">
                    <li className="sidebarlistiteam">
                        Life Style
                    </li>
                    <li className="sidebarlistiteam">
                        Music
                    </li>
                    <li className="sidebarlistiteam">
                        Style
                    </li>
                    <li className="sidebarlistiteam">
                        Sports
                    </li>
                    <li className="sidebarlistiteam">
                        Cinema
                    </li>
                    <li className="sidebarlistiteam">
                        Tech
                    </li>
                </ul>
            </div>
            <div className="sidebariteam">
                <span className="sidebartitle">
                    FOLLOW US
                </span>
                <div className="sidebarsocial">
                    <i className="sidebaricon fab fa-facebook-square"></i>
                    <i className="sidebaricon fab fa-twitter-square"></i>
                    <i className="sidebaricon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
