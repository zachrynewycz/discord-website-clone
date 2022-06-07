import NavBar from "./NavBar";

const NitroHeader = () => {
    return (  
        <section style={{background: "linear-gradient(90deg, #b473f5, #e292aa)"}} className="min-w-[420px] relative">
            <NavBar/>

            <img className="lg:hidden w-60 absolute left-[52%]" src={`${process.env.PUBLIC_URL}/images/wumpus.png`} alt=""/>
            
            <div className="max-w-[1200px] mt-20 px-6 relative z-10 md:px-24 lg:grid lg:grid-cols-12 lg:grid-rows-3 lg:mx-auto xl:px-0 pb-10">
                <img className="mx-auto mt-36 lg:m-0 lg:row-start-1 col-span-3 min-w-[320px]" src={`${process.env.PUBLIC_URL}/images/nitro-logo.svg`} alt=""/>
                <p className="font-whitney_light text-white mt-10 text-center min-w-[400px] max-w-[650px] mx-auto text-headerParagraph lg:text-left row-start-2 lg:mt-5 col-span-5">Get an enhanced Discord experience for one low monthly cost. Upgrade your emoji, enjoy bigger file uploads, stand out in your favorite Discords, and more.</p>
                
                <div className="flex flex-col md:flex-row mt-10 justify-center md:gap-5 row-start-3 col-span-8 lg:justify-start lg:items-start lg:mt-9 lg:gap-12">
                        <button className="font-whitney_regular text-white text-xl bg-dark-not-black mb-10 rounded-full py-3 px-7 flex items-center justify-center">$99.99 per year <span className="bg-brand text-xs rounded-full px-2 ml-2 py-1">16% off</span></button>
                        <button className="font-whitney_regular text-white text-xl bg-dark-not-black rounded-full py-3 px-7 mb-10">$9.99 per month</button>
                </div>
            </div>

            <div className="absolute top-0 w-full h-full overflow-hidden">
                <video className="hidden lg:block min-h-[150%] min-w-[140%] absolute left-[-170px]" loop autoPlay={true} src={`${process.env.PUBLIC_URL}/images/nitro-video.mp4`}/>
            </div>
        </section>
    );
}
 
export default NitroHeader;