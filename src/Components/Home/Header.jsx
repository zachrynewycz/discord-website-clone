import WindowsDownloadBtn from "../WindowsDownloadBtn";
import NavBar from "../NavBar";


const Header = () => {
    return (  
        <section className="bg-hero-bg min-w-[420px] relative">
            <NavBar/>
            
            <div className="text-white max-w-[1200px] mx-auto text-left lg:text-center px-10 py-20 lg:py-[120px] relative z-20">
                <h1 className="font-giton_black text-header lg:text-[56px]">IMAGINE A PLACE...</h1>
                <p className="text-headerParagraph mt-5 max-w-[800px] mx-auto">...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
                
                <div className="mt-6 lg:flex items-center justify-center">
                    <WindowsDownloadBtn
                        btnStyle={{backgroundColor: "white", height: "50px", padding: "16px 32px", position: "relative"}}
                        fontStyle={{color: "#23272a", fontSize: "20px"}}
                        iconColor="#23272a"
                    />
                    <button className="bg-not-quite-black rounded-full font-whitney_light text-[20px] py-3 px-8 mt-6 lg:mt-0 lg:ml-9 hover:bg-dark-not-black hover:shadow-2xl ease-in hover:duration-150">Open Discord in your browser</button>
                </div>
            </div>

            <div className="h-full w-full lg:absolute lg:top-0 lg:left-0">
                <img className="max-w-[880px] ml-[-80px] w-full lg:w-fit lg:absolute bottom-0 z-10 lg:left-1/2 lg:ml-[-1030px]" src={`${process.env.PUBLIC_URL}/images/header-characters.svg`}/>
                <img className="hidden lg:block absolute bottom-0 z-10 right-0 ml-[370px] left-1/2" src={`${process.env.PUBLIC_URL}/images/characters.svg`}/>
                <img className="hidden lg:block absolute bottom-0 ml-[-1300px] left-1/2 min-w-[2500px]" src={`${process.env.PUBLIC_URL}/images/mountains.svg`}/>
            </div>
        </section>
    );
}
 
export default Header;