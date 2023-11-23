"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./testimonial.module.css";
gsap.registerPlugin(ScrollTrigger);

export default function Testimonial(props) {
    const root = useRef(null);

    const bannerAnime = () => {
        return gsap.to(root.current, {x: 0, duration: 0.6, ease: "power2.inOut"});
    }

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: root.current,
                animation: bannerAnime(),
                start: "top 60%"
            });
        }, root);
        return () => ctx.revert();
    }, []);

    return (<section ref={root} className={styles.section}>{props.children}</section>);
}
