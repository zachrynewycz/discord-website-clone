import NavBar from "./NavBar";
import WindowsDownloadBtn from "./WindowsDownloadBtn";

const DownloadHeader = () => {
    return (  
        <section className="bg-not-quite-black w-full relative min-w-[480px]">
            <NavBar/>

            <div className="grid grid-cols-12 px-10 py-5 lg:py-28 lg:px-10 mx-auto max-w-[1200px]">
                <div className="col-span-10 col-start-2 col-end-12 lg:col-span-6">
                    <h1 className="font-giton_black text-white text-header">GET DISCORD FOR ANY DEVICE</h1>
                    <p className="font-whitney_light text-white text-headerParagraph mt-8">An adventure awaits. Hang out with your friends on our desktop app and keep the conversation going on mobile.</p>
                    <div className="flex flex-col md:flex-row md:items-center gap-5 mt-10">
                        <WindowsDownloadBtn
                            btnStyle={{backgroundColor: "#5865f2", height: "50px", padding: "16px 32px", position: "relative"}}
                            fontStyle={{color: "white", fontSize: "20px"}}
                            iconColor="white"
                        />
                        <p className="font-whitney_light text-white text-center md:text-left">Windows 7 or higher</p>
                    </div>
                </div>
                
                <img className="w-full h-full col-span-6 col-start-7 hidden lg:block" src={`${process.env.PUBLIC_URL}/images/laptop2.svg`}/>
            </div>
        </section>
    );
}
 
export default DownloadHeader;