import WindowsDownloadBtn from "../WindowsDownloadBtn";

const OverviewSections = () => {
    return (  
        <>
            <section>
                <img src={`${process.env.PUBLIC_URL}/images/channel-demo.svg`}/>
                <div>
                    <h1>Create an invite-only place where you belong</h1>
                    <p>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
                </div>
            </section>

            <section>
                <div>
                    <h1>Where hanging out is easy</h1>
                    <p>Grab a seat in a voice channel when you're free. Friends in your server can see you're around and instantly pop in to talk without having to call.</p>
                </div>
                <img src={`${process.env.PUBLIC_URL}/images/voice-demo.svg`}/>
            </section>

            <section>
                <img src={`${process.env.PUBLIC_URL}/images/role-demo.svg`}/>
                <div>
                    <h1>From few to a fandom</h1>
                    <p>Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
                </div>
            </section>

            <section>
                <div>
                    <h1>RELIABLE TECH FOR STAYING CLOSE</h1>
                    <p>Low-latency voice and video feels like you're in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
                </div>
                <img src={`${process.env.PUBLIC_URL}/images/display-demo.svg`}/>

                <div>
                    <h1>Ready to start your journey?</h1>
                    <img src={`${process.env.PUBLIC_URL}/images/stars.svg`}/>
                    <WindowsDownloadBtn/>
                </div>
            </section>
        </>
    );
}
 
export default OverviewSections;