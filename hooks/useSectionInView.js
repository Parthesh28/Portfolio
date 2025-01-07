import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useActiveSection } from "../context/active-section-context";


export default function useSectionInView(section, thres) {
    const { ref, inView } = useInView({ threshold: thres});
    const { setActiveSection, lastclicktime } = useActiveSection()

    useEffect(() => {
        if (inView && Date.now() - lastclicktime > 1000) {
            setActiveSection(section)
        }
    }, [inView]);

    return {ref}
}