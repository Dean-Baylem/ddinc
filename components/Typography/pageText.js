"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./pageText.module.css";
gsap.registerPlugin(ScrollTrigger);

export default function PageText(props) {
    const root = useRef(null);

    const popUpText = () => {
        return gsap.to("p", {opacity: 1, y: 0, duration: 0.5, delay: 1});
    }

    useLayoutEffect(() => {
        if (props.animate) {
            let ctx = gsap.context(() => {
                ScrollTrigger.create({
                    trigger: root.current,
                    animation: popUpText(),
                    start: "top 60%"
                });
            }, root);
            return () => ctx.revert();
        }
    })

    return (
        <div
            ref={root}
            className={`${styles.container}`}
        >
            {props.content.map((line, index) => (
                <p
                    className={`${styles[props.textStyle]} ${props.animate && styles.textPop}`}
                    key={index}
                >
                    {line}
                </p>
            ))}
        </div>
    );
}
