const SafetyPrinciples = () => {
    return (  
    <section className="bg-off-white min-w-[420px]">
        <div className="py-28 max-w-[1200px] mx-auto px-6">
            <>
                <h1 className="font-giton_black text-not-quite-black text-sectionHeader">PRINCIPLES</h1>
                <p className="mt-2 text-headerParagraph text-[#4f5660] ">We want to make sure that Discord has the ability for everyone to have a safe, positive and inclusive experience, 
                    no matter what brought them here. For that to happen, we must all agree to a set of rules that govern our interactions 
                    on Discord. When you sign up to Discord, you agree to follow the rules below and refrain from behavior that isn't allowed on 
                    the service. <br/><br/> In exchange, it's our job to make sure your experience is everything it can be. Here are the principles 
                    that guide the society we want to create on Discord:
                </p>
            </>

            <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-10">
                <div className="w-[85%]">
                    <h2 className="font-giton_regular text-not-quite-black text-deviceHeader md:leading-10">We're determined to make sure that Discord will always be a welcoming place for you.</h2>
                    <p className="mt-3 text-headerParagraph text-[#4f5660]">There's a huge responsibility in being a place where hundreds of millions of people talk to each other.</p>
                </div>
                <div className="w-[85%]">
                    <h2 className="font-giton_regular text-not-quite-black text-deviceHeader md:leading-10">Privacy is incredibly important to us.</h2>
                    <p className="mt-3 text-headerParagraph text-[#4f5660]">We do not monitor every server or every conversation. We do not sell your data, nor do we share it with third parties for advertising purposes.</p>
                </div>
                <div className="w-[85%]">
                    <h2 className="font-giton_regular text-not-quite-black text-deviceHeader leading-10">Safety is just as important.</h2>
                    <p className="mt-3 text-headerParagraph text-[#4f5660]">We don't sit back and simply wait for reports, but instead act to protect everyone on the platform. We know that there are cases where bad actors are acting to cause violence or harm in the real world, and we make it clear to them that there's no place for them on Discord.</p>
                </div>
                <div className="w-[85%]">
                    <h2 className="font-giton_regular text-not-quite-black text-deviceHeader leading-10">Finally, Discord is pseudonymous.</h2>
                    <p className="mt-3 text-headerParagraph text-[#4f5660]">Your account on Discord doesn't have to be tied back to your identity, and we want to make sure that everyone can be their true self. But that doesn't mean that someone can be free of the consequences of their actions.</p>
                </div>
            </div>
        </div>
    </section>        
    );
}
 
export default SafetyPrinciples;