"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./roundedImg.module.css";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

export default function RoundedImg(props) {
    const root = useRef(null);

    const popUpText = () => {
        return gsap.to(root.current, { opacity: 1, x: 0, duration: 0.5, delay: 1 });
    };

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: root.current,
                animation: popUpText(),
                start: "top 60%",
            });
        }, root);
        return () => ctx.revert();
    });

    return (
        <Image
            ref={root}
            src={props.imgSrc}
            className={`${styles.base} ${styles[props.class]}`}
            width={props.width}
            height={props.height}
            alt="roundedImg"
        />
    );
}
