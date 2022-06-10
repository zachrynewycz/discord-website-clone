import NavBar from "./NavBar";

const SafetyHeader = () => {
    return (  
        <section className="bg-brand min-w-[420px]">
            <NavBar/>

            <div className="py-8 lg:py-14 max-w-[1200px] mx-auto px-10 lg:px-5">
                <div className="hidden lg:block">
                    <ul className="flex gap-10 items-center text-headerParagraph text-white font-whitney_light">
                        <li>Safety Center</li>
                        <li className="flex items-center gap-2">Controlling Your Experience <span><img className="w-3" src={`${process.env.PUBLIC_URL}/images/arrow-down.svg`} alt=""/></span></li>
                        <li className="flex items-center gap-2">Parents &#38; Educators <span><img className="w-3" src={`${process.env.PUBLIC_URL}/images/arrow-down.svg`} alt=""/></span></li>
                        <li className="flex items-center gap-2">How We Enforce Rules <span><img className="w-3" src={`${process.env.PUBLIC_URL}/images/arrow-down.svg`} alt=""/></span></li>
                    </ul>
                </div>

                <h1 className="text-2xl md:text-6xl font-giton_black text-white mt-10">DISCORD SAFETY CENTER</h1>
                
                <div className="grid grid-cols-2 md:grid-cols-10 gap-5 pb-10">
                    <p className="font-whitney_light text-white col-span-2 md:col-span-5 text-headerParagraph mt-7">Discord is a place dedicated to talking and hanging out with your friends, family and communities. 
                                Millions of diverse communities are on Discord, from small groups of old friends to huge servers where hundreds of thousands of 
                                people can connect over shared interests. <br/><br/> Discord isn't a social media platform. There is no algorithm deciding what you should see, no 
                                endless scrolling, no news feed, no counting likes, no going viral. Instead, Discord is a place where everyone can be themselves and spend 
                                time with other people who share their interests and hobbies. Conversations on Discord are driven only by the people you choose and the 
                                topics you pick.</p>
                    <img className="col-span-2 row-start-1 mt-5 md:mt-0 md:row-start-auto md:col-span-5" src={`${process.env.PUBLIC_URL}/images/tools.svg`}/>
                </div>
            </div>
        </section>
    );
}
 
export default SafetyHeader;