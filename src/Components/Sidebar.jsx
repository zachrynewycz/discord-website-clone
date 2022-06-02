import Logo from "./Logo";
import WindowsDownloadBtn from "./WindowsDownloadBtn";
import {Link} from "react-router-dom";

const SideBar = () => {
    return (  
        <>
            <svg>
                <path fill="white" fillRule="evenodd" clipRule="evenodd" d="M33.3327 10H6.66602V15H33.3327V10ZM6.66602 18.3317H33.3327V23.3317H6.66602V18.3317ZM6.66602 26.665H33.3327V31.665H6.66602V26.665Z"></path>
            </svg>

            <div>
                <div>
                    <Logo/>
                    
                    <svg>
                        <path fill="currentColor" d="M9.5 3.205L8.795 2.5 6 5.295 3.205 2.5l-.705.705L5.295 6 2.5 8.795l.705.705L6 6.705 8.795 9.5l.705-.705L6.705 6"></path>
                    </svg>
                    
                    <hr/>
                </div>

                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/download">Download</Link>
                    <Link to="/nitro">Nitro</Link>
                    <Link to="/support">Support</Link>
                    <Link to="/careers">Careers</Link>
                </ul>

                <WindowsDownloadBtn/>
            </div>
        </>
    );
}
 
export default SideBar;