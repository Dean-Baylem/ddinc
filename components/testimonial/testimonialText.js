"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./testimonialText.module.css";
gsap.registerPlugin(ScrollTrigger);

export default function TestimonialText(props) {
    const root = useRef(null);

    const popUp = () => {
        return gsap.to(root.current, { y: 0, duration: 0.6, ease: "power2.inOut", delay: 0.6, opacity: 1 });
    };

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: root.current,
                animation: popUp(),
                start: "top 60%",
            });
        }, root);
        return () => ctx.revert();
    }, []);

    return <h5 ref={root} className={`${styles.baseText} ${styles[props.extraStyle]}`}>{props.children}</h5>;
}
