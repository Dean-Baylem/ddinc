"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./testimonialIcon.module.css";
gsap.registerPlugin(ScrollTrigger);

export default function TestimonialIcon(props) {
    const root = useRef(null);

    const popUp = () => {
        const delay = (props.delay / 10) + 1;
        return gsap.to(root.current, { y: 0, duration: 0.4, ease: "power2.inOut", delay: delay, opacity: 1 });
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

    return (
        <div ref={root} className={styles.container}>
            <img
                className={styles.icon}
                src={props.iconSrc}
                alt={props.name}
            />
            {props.title && <h5 className={`${styles.name} ${styles[props.titleStyle]}`}>{props.name}</h5>}
        </div>
    );
}
