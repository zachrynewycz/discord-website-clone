const DeviceDownload = () => {
    return (  
        <section>
            <div>
                <div className="p-14">
                    <h1 className="font-giton_regular">iOS</h1>
                    <button>Download</button>
                    <img src={`${process.env.PUBLIC_URL}/images/iphone.svg`}/>
                </div>

                <div>
                    <h1>Android</h1>
                    <button>Download</button>
                    <img src={`${process.env.PUBLIC_URL}/images/andriod.svg`}/>
                </div>
                
                <div>
                    <h1>Linux</h1>
                    <button>Download</button>
                    <img src={`${process.env.PUBLIC_URL}/images/monitor.svg`}/>
                </div>
                
                <div>
                    <h1>Mac</h1>
                    <button>Download</button>
                    <img src={`${process.env.PUBLIC_URL}/images/laptop.svg`}/>
                </div>

                <div>
                    <h1>Feeling experimental?</h1>
                    <p>Try our Public Test Build and test new features before they launch.</p>
                    <button>Download Public Test Build</button>
                </div>
            </div>
        </section>
    );
}
 
export default DeviceDownload;