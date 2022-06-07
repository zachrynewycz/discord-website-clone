const NitroPerk = ({header, caption, image, gradient, imgWidth, imgHeight}) => {
    return (  
        <div style={{background: `linear-gradient(${gradient})`}} className="p-8 text-center text-white rounded-lg col-span-4 min-w-[380px] flex flex-col justify-between">
            <h1 className="text-xl">{header}</h1>
            <p className="mt-2">{caption}</p>
            <img style={{width: imgWidth, height: imgHeight}} className="mt-5 mx-auto" src={`${process.env.PUBLIC_URL}/images/${image}`} alt=""/>
        </div>
    );
}
 
export default NitroPerk;