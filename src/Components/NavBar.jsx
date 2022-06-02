import Logo from "./Logo";
import SideBar from "./Sidebar";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (  
        <nav>
            <Logo/>
            
            <ul>
                <Link to="/download">Download</Link>
                <Link to="/nitro">Nitro</Link>
                <Link to="/safety">Safety</Link>
                <Link to="/support">Support</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/careers">Careers</Link>
            </ul>

            <button>Open Discord</button>
            <SideBar/>
        </nav>
    );
}
 
export default NavBar;