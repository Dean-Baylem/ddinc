"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./overlapCard.module.css";
import TextArea from "../Typography/textArea";
gsap.registerPlugin(ScrollTrigger);

export default function OverlapCard(props) {
    const root = useRef(null);

    const overLapAnime = () => {
        const tl = gsap.timeline();
        tl.to(".js-overLapText", {opacity: 1, x:0, duration: 0.5});
        tl.to(".js-overLapImage", {opacity: 1, x:0, duration: 0.4}, "<");
        tl.to(".js-overLapNumber", {opacity: 1, y: 0, duration: 0.3}, "<");
        return tl;
    };

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: root.current,
                animation: overLapAnime(),
                start: "top 75%"
            });
        }, root);
        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={root}
            className={`${styles.container} ${styles[props.textAreaPosition]}`}
        >
            <div className={`${styles.textArea} js-overLapText`}>
                <TextArea
                    title={props.title}
                    text={props.text}
                    textStyle="midText"
                    button={props.button}
                    linkTo={props.linkTo}
                    linkText={props.linkText}
                    buttonClass={props.buttonClass}
                    titleAnimate={true}
                    textAnimate={true}
                />
            </div>
            <div className={styles.imgContainer}>
                <img
                    className={`js-overLapImage`}
                    src={props.imgSrc}
                    alt={props.title}
                />
            </div>
            {props.number && <h3 className={`${styles.number} ${styles[props.numberStyle]} js-overLapNumber`}>{props.number}</h3>}
        </div>
    );
}
