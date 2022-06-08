import NavBar from "./NavBar";
import WindowsDownloadBtn from "./WindowsDownloadBtn";

const DownloadHeader = () => {
    return (  
        <section className="bg-not-quite-black w-full relative min-w-[420px]">
            <NavBar/>

            <div className="grid grid-cols-12 lg:py-28 lg:px-10 mx-auto max-w-[1200px]">
                <div className="col-span-6">
                    <h1 className="font-giton_black text-white text-header">GET DISCORD FOR ANY DEVICE</h1>
                    <p className="font-whitney_light text-white text-headerParagraph mt-8">An adventure awaits. Hang out with your friends on our desktop app and keep the conversation going on mobile.</p>
                    <div className="flex items-center gap-5 mt-10">
                        <WindowsDownloadBtn
                            btnStyle={{backgroundColor: "#5865f2", height: "50px", padding: "16px 32px", position: "relative"}}
                            fontStyle={{color: "white", fontSize: "20px"}}
                            iconColor="white"
                        />
                        <p className="font-whitney_light text-white">Windows 7 or higher</p>
                    </div>
                </div>
                
                <img className="w-full h-full col-span-6 col-start-7" src={`${process.env.PUBLIC_URL}/images/laptop2.svg`}/>
            </div>
        </section>
    );
}
 
export default DownloadHeader;