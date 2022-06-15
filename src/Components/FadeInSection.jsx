import { useRef, useEffect, useState } from "react";

const FadeInSection = (props) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef();

    useEffect(() => {
        //Check if the section is on screen::if it is then have it fade in
        const observer = new IntersectionObserver(entries => {
            //Make sure it fades in once
            entries.forEach(entry => { if(entry.isIntersecting) setIsVisible(entry.isIntersecting)})
        })
        const { current } = sectionRef;
        observer.observe(current);
        //Cleanup
        return () => observer.unobserve(current)
    }, [])

    return (  
        <section className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={sectionRef}>
            {props.children}
        </section>
    );
}
 
export default FadeInSection;