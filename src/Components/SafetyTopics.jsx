const SafetyTopics = () => {
    return (  
        <div className="min-w-[420px]">
            <section className="flex flex-col px-10 md:grid grid-cols-3 mx-auto max-w-[1200px] gap-10 py-10 lg:py-28">
                <div>
                    <h1 className="font-giton_regular text-deviceHeader">Controlling Your Experience</h1>
                    <p className="font-whitney_light text-headerParagraph mt-5 text-[#4f5660]">These resources will help you learn how you can create the best Discord experience for you. We cover everything from account tips, to server management, to how to report problems directly to our Trust and Safety team.</p>
                </div>

                <ul className="font-whitney_light text-[#00b0f4] text-xl col-span-2 flex flex-col justify-between md:pl-10 gap-5 md:gap-0">
                    <li>Four steps to a super safe account</li>
                    <li>Four steps to a super safe server</li>
                    <li>Role of administrators and moderators on Discord</li>
                    <li>Reporting problems to Discord</li>
                    <li>Mental health on Discord</li>
                    <li>Age-Restricted Content on Discord</li>
                    <li>Tips against spam and hacking</li>
                </ul>
            </section>

            <section className="bg-off-white">
                <div className="flex flex-col px-10 md:grid grid-cols-3 mx-auto max-w-[1200px] gap-10 py-10 lg:py-28">
                    <div>
                        <h1 className="font-giton_regular text-deviceHeader">Parents &#38; Educators</h1>
                        <p className="font-whitney_light text-headerParagraph mt-5 text-[#4f5660]">We know that teenagers and students are excited about communicating on Discord, which can lead to questions from parents and educators. Here you can find our top tips for your teens and classroom as they use Discord.</p>
                    </div>
                    
                    <ul className="font-whitney_light text-[#00b0f4] text-xl col-span-2 flex flex-col justify-between md:pl-10 gap-5 md:gap-0">
                        <li>What is Discord?</li>
                        <li>Discord's commitment to a safe and trusted experience</li>
                        <li>Helping your teen stay safe on Discord</li>
                        <li>Talking about online safety with your teen</li>
                        <li>Answering parents' and educators' top questions</li>
                        <li>If your teen encounters an issue</li>
                        <li>Working with CARU to protect users on Discord</li>
                    </ul>
                </div>
            </section>

            <section className="flex flex-col px-10 md:grid grid-cols-3 mx-auto max-w-[1200px] gap-10 py-10 lg:py-28">
                <div>
                    <h1 className="font-giton_regular text-deviceHeader">How We Enforce Rules</h1>
                    <p className="font-whitney_light text-headerParagraph mt-5 text-[#4f5660]">These articles help provide clarity about how we address different situations on Discord, from how we investigate to how we work with 3rd parties like law enforcement. You can also find our annual transparency report here.</p>
                </div>

                <ul className="font-whitney_light text-[#00b0f4] text-xl col-span-2 flex flex-col justify-between md:pl-10 gap-5 md:gap-0">
                    <li>Our policies</li>
                    <li>Enforcing our rules</li>
                    <li>How we investigate</li>
                    <li>What actions we take</li>
                    <li>How you can appeal our actions</li>
                    <li>Discord's Transparency Report</li>
                    <li>Working with law enforcement</li>
                </ul>
            </section>
        </div>
    );
}
 
export default SafetyTopics;