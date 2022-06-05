import WindowsDownloadBtn from "../WindowsDownloadBtn";

const Header = () => {
    return (  
        <section className="bg-hero-bg min-w-[420px]">
            <div className="text-white max-w-[1200px] ml-auto mr-auto left-0 right-0 text-left lg:text-center px-10 pb-[56px] pt-[120px]">
                <h1 className="font-giton_black text-header lg:text-[56px]">IMAGINE A PLACE...</h1>
                <p className="text-headerParagraph mt-5 max-w-[850px] mx-auto">...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
                
                <div className="mt-6 lg:flex items-center justify-center">
                    <WindowsDownloadBtn
                        btnStyle={{backgroundColor: "white", height: "50px", padding: "16px 32px", position: "relative"}}
                        fontStyle={{color: "#23272a", fontSize: "20px"}}
                        iconColor="#23272a"
                    />
                    <button className="bg-not-quite-black rounded-full font-whitney_light text-[20px] py-3 px-8 mt-6 lg:mt-0 lg:ml-9">Open Discord in your browser</button>
                </div>
            </div>

            <img className="hidden lg:block" src={`${process.env.PUBLIC_URL}/images/stars.svg`}/>
            <img className="hidden lg:block lg:w-[" src={`${process.env.PUBLIC_URL}/images/mountains.svg`}/>
            <img className="max-w-[880px] relative ml-[-80px] block w-full" src={`${process.env.PUBLIC_URL}/images/header-characters.svg`}/>
            <img className="hidden lg:block" src={`${process.env.PUBLIC_URL}/images/characters.svg`}/>
        </section>
    );
}
 
export default Header;