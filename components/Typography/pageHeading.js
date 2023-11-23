"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./pageHeading.module.css";
gsap.registerPlugin(ScrollTrigger);

export default function PageHeading(props) {
    const root = useRef(null);

    const blockAnime = () => {
        const tl = gsap.timeline();
        tl.to(".js-heading span", { scaleX: 1, duration: 1 });
        tl.to(root.current, { color: "#000000", duration: 0.1 });
        tl.to(".js-heading span", { scaleX: 0, transformOrigin: "right" });
        return tl;
    };

    const dropDown = () => {
        const tl = gsap.timeline();
        tl.to(root.current, {opacity: 1, y: 0, duration: 0.5, delay: 1.2, ease: "power2.out"});
        return tl;
    };

    useLayoutEffect(() => {
        if (props.animate) {
            let ctx = gsap.context(() => {
                ScrollTrigger.create({
                    trigger: root.current,
                    animation: blockAnime(),
                    start: "top 60%"
                });
            }, root);
            return () => ctx.revert();
        }
        if (props.subAnimate) {
            let ctx = gsap.context(() => {
                ScrollTrigger.create({
                    trigger: root.current,
                    animation: dropDown(),
                    start: "top 60%"
                });
            }, root);
            return () => ctx.revert();
        }
    }, []);

    return (
        <h2
            ref={root}
            className={`${styles.base} ${styles[props.addedStyle]} js-heading ${props.animate && styles.jsHeading} ${props.subAnimate && styles.jsSubHeading}`}
        >
            {props.animate && <span className={`js-block ${styles["js-block"]}`}></span>}
            {props.children}
        </h2>
    );
}
