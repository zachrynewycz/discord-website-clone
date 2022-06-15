import WindowsDownloadBtn from "./WindowsDownloadBtn";
import FadeInSection from "./FadeInSection";

const HomeOverviewSections = () => {
    return (  
        <div className="min-w-[420px]">
            <FadeInSection>
                <section className="px-6 py-28 grid grid-cols-1 md:grid-cols-2 max-w-[1260px] mx-auto">
                    <img className="w-full max-w-[670px]" src={`${process.env.PUBLIC_URL}/images/channel-demo.svg`} alt=""/>
                    <div className="mt-5 md:w-2/3 mx-auto">
                        <h1 className="font-giton_bold text-dark-not-black text-sectionHeader">Create an invite-only place where you belong</h1>
                        <p className="font-whitney_light text-not-quite-black mt-4 text-headerParagraph">Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
                    </div>
                </section>
            </FadeInSection>

            <FadeInSection>
                <section className="bg-off-white">
                    <div className="px-6 py-28 grid grid-cols-1 md:grid-cols-2 max-w-[1260px] mx-auto">
                        <div className="mt-5 md:w-2/3 mx-auto order-2 md:order-none">
                            <h1 className="font-giton_bold text-dark-not-black text-sectionHeader">Where hanging out is easy</h1>
                            <p className="font-whitney_light text-not-quite-black mt-4 text-headerParagraph">Grab a seat in a voice channel when you're free. Friends in your server can see you're around and instantly pop in to talk without having to call.</p>
                        </div>

                        <img className="w-full max-w-[670px]" src={`${process.env.PUBLIC_URL}/images/voice-demo.svg`} alt=""/>
                    </div>
                </section>
            </FadeInSection>

            <FadeInSection>
                <section className="px-6 py-28 grid grid-cols-1 md:grid-cols-2 max-w-[1260px] mx-auto">
                    <img className="w-full max-w-[670px]" src={`${process.env.PUBLIC_URL}/images/role-demo.svg`} alt=""/>

                    <div className="mt-5 md:w-2/3 mx-auto">
                        <h1 className="font-giton_bold text-dark-not-black text-sectionHeader">From few to a fandom</h1>
                        <p className="font-whitney_light text-not-quite-black mt-4 text-headerParagraph">Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
                    </div>
                </section>
            </FadeInSection>


            <FadeInSection>
                <section className="bg-off-white px-6 pt-28 pb-18 grid grid-cols-1 mx-auto">
                    <div className="md:text-center px-10">
                        <h1 className="font-giton_black text-dark-not-black text-sectionHeader">RELIABLE TECH FOR STAYING CLOSE</h1>
                        <p className="font-whitney_light text-dark-not-black text-headerParagraph mt-3 max-w-[870px] mx-auto">Low-latency voice and video feels like you're in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
                    </div>

                    <img className="mx-auto" src={`${process.env.PUBLIC_URL}/images/display-demo.svg`} alt=""/>

                    <div className="mx-auto text-center mt-20 mb-28 flex flex-col items-center">
                        <h1 className="font-giton_bold text-3xl text-dark-not-black relative">Ready to start your journey?</h1>
                        <WindowsDownloadBtn
                            btnStyle={{backgroundColor: "#5865f2", marginTop: "40px", padding: "10px 32px", position: "relative"}}
                            fontStyle={{color: "white", fontSize: "20px"}}
                            iconColor="white"
                        />
                        <img className="relative bottom-36" src={`${process.env.PUBLIC_URL}/images/stars.svg`} alt=""/>
                    </div>
                </section>
            </FadeInSection>
        </div>
    );
}
 
export default HomeOverviewSections;