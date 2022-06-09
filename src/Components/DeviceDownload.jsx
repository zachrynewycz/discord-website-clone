const DeviceDownload = () => {
    return (  
        <section className="py-28 flex justify-center">
            <div className="grid px-10 md:grid-cols-2 md:grid-rows-[155px_auto_155px_auto_155px] gap-5 max-w-[1200px] min-w-[420px]">
                <div className="p-14 bg-off-white rounded-2xl h-[300px] md:h-[550px] overflow-hidden flex flex-col row-span-2">
                    <h1 className="font-giton_regular text-deviceHeader text-center">iOS</h1>
                    <button className="px-8 py-4 bg-not-quite-black rounded-full text-white font-whitney_regular text-xl mt-4 md:max-w-[150px] mx-auto">Download</button>
                    <img className="mt-5 md:mt-14" src={`${process.env.PUBLIC_URL}/images/iphone.svg`}/>
                </div>

                <div className="p-14 bg-off-white rounded-2xl h-[300px] md:h-[550px] overflow-hidden flex flex-col row-start-2 row-span-2 md:col-start-2">
                    <h1 className="font-giton_regular text-deviceHeader text-center">Android</h1>
                    <button className="px-8 py-4 bg-not-quite-black rounded-full text-white font-whitney_regular text-xl mt-4 md:max-w-[150px] mx-auto">Download</button>
                    <img className="mt-5 md:mt-14" src={`${process.env.PUBLIC_URL}/images/andriod.svg`}/>
                </div>
                
                <div className="p-14 bg-off-white rounded-2xl h-[300px] md:h-[550px] overflow-hidden flex flex-col row-span-2">
                    <h1 className="font-giton_regular text-deviceHeader text-center">Linux</h1>
                    <button className="px-8 py-4 bg-not-quite-black rounded-full text-white font-whitney_regular text-xl mt-4 md:max-w-[150px] mx-auto">Download</button>
                    <img className="mt-5 md:mt-14" src={`${process.env.PUBLIC_URL}/images/monitor.svg`}/>
                </div>
                
                <div className="p-14 bg-off-white rounded-2xl h-[300px] md:h-[550px] overflow-hidden flex flex-col row-span-2">
                    <h1 className="font-giton_regular text-deviceHeader text-center">Mac</h1>
                    <button className="px-8 py-4 bg-not-quite-black rounded-full text-white font-whitney_regular text-xl mt-4 md:max-w-[150px] mx-auto">Download</button>
                    <img className="mt-5 md:mt-14" src={`${process.env.PUBLIC_URL}/images/laptop.svg`}/>
                </div>

                <div className="bg-off-white rounded-2xl px-9 py-8 flex flex-col row-span-2">
                    <h1 className="font-giton_regular text-deviceHeader text-dark-not-black">Feeling experimental?</h1>
                    <p className="text-headerParagraph font-whitney_light text-not-quite-black">Try our Public Test Build and test new features before they launch.</p>
                    <button className="px-8 py-4 bg-not-quite-black rounded-full text-white font-whitney_regular text-xl mt-4">Download Public Test Build</button>
                </div>
            </div>
        </section>
    );
}
 
export default DeviceDownload;