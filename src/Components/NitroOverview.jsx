import NitroPerk from "./NitroPerk";

const NitroOverview = () => {
    return (  
    <section className="max-w-[1260px] mx-auto min-w-[420px] relative">
        <>
            <h1 className="font-giton_black text-m md:text-4xl text-dark-not-black text-center pt-28 px-10">DISCORD NITRO ENHANCES YOUR ALL-IN-ONE DISCORD VOICE, VIDEO, AND TEXT CHAT.</h1>
            <p className="text-not-quite-black text-xl font-whitney_light text-center mt-7">Check out the perks you'll get.</p>
        </>
        
        <div className="mt-28 px-10 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-5">
            <NitroPerk
                header="Better Emoji"
                caption="Collect or make your own custom and animated emojis."
                image="better-emoji.svg"
                gradient="142.53deg, #00a295, #26e8f4 98.75%"
            />
            <NitroPerk
                header="Personal Profile"
                caption="Use an animated avatar and claim a custom tag."
                image="personal-profile.svg"
                gradient="321.82deg, #21f2ff, #4181ff 59.22%, #4475ff 98.02%"
            />
            <NitroPerk
                header="Support a Server"
                caption="Get 2 Server Boosts and 30% off extra Boosts."
                image="server-support.svg"
                gradient="138.46deg, #3e70ff 1.48%, #9a98ff 98.75%"
            />
            <NitroPerk
                header="Rep Your Support"
                caption="Profile badge shows how long you've supported Discord."
                image="rep-support.svg"
                gradient="141.85deg, #7e7bff, #ff73fa"
            />
            <NitroPerk
                header="Bigger Uploads"
                caption="100MB upload size for high-quality file sharing."
                image="bigger-uploads.png"
                gradient="141.48deg, #f837ee 1.35%, #ffcd4b"
                imgWidth="180px"
                imgHeight="115px"
            />
            <NitroPerk
                header="HD Video"
                caption="Hi-res video, screenshare, and Go Live streaming."
                image="HD-video.png"
                gradient="321.73deg, #ffcd4b -1.09%, #ee6315 100.65%"
                imgWidth="180px"
                imgHeight="115px"
            />
        </div>
        
        <div className="py-28 px-10">
            <h1 className="font-giton_regular text-dark-not-black text-3xl text-center">Doitdoitdoitdoitdoitdoit</h1>
            <div className="flex flex-col lg:grid lg:grid-cols-4 gap-5">
                <button className="relative font-whitney_regular text-white text-xl bg-not-quite-black rounded-full py-3 px-7 mt-10 flex items-center justify-center col-start-2 hover:bg-dark-not-black hover:shadow-2xl ease-in duration-100">$99.99 per year <span className="bg-brand text-xs rounded-full px-2 ml-2">16% off</span></button>
                <button className="relative font-whitney_regular text-white text-xl bg-not-quite-black rounded-full py-3 px-7 mt-10 col-start-3 hover:bg-dark-not-black hover:shadow-2xl ease-in duration-100">$9.99 per month</button>
            </div>
        </div>
    </section>        
    );
}
 
export default NitroOverview;