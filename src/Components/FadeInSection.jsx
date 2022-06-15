import { useRef, useEffect, useState } from "react";

const FadeInSection = (props) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => { if(entry.isIntersecting) setIsVisible(entry.isIntersecting)})
        })
        observer.observe(sectionRef.current);
        return () => observer.unobserve(sectionRef.current)
    }, [])

    return (  
        <section className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={sectionRef}>
            {props.children}
        </section>
    );
}
 
export default FadeInSection;