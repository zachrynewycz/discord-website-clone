import WindowsDownloadBtn from "../WindowsDownloadBtn";

const Header = () => {
    return (  
        <section>
            <div>
                <h1>IMAGINE A PLACE...</h1>
                <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
                
                <WindowsDownloadBtn/>
                <button>Open Discord in your browser</button>
            </div>

            <div>
                <img src={`${process.env.PUBLIC_URL}/images/stars`}/>
                <img src={`${process.env.PUBLIC_URL}/images/mountains`}/>
                <img src={`${process.env.PUBLIC_URL}/images/header-characters`}/>
                <img src={`${process.env.PUBLIC_URL}/images/characters.svg`}/>
            </div>
        </section>
    );
}
 
export default Header;