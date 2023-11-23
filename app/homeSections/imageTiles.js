"use client";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./imageTiles.module.css";

export default function ImageTiles(props) {

    const root = useRef(null);

    const popUpAnime = (element, index) => {
        if (index % 2 === 0) {
        return gsap.fromTo(element, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, immediateRender: false });
        }
        else {
            return gsap.fromTo(element, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 2, immediateRender: false });
        }
    };

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let ctx = gsap.context(() => {
            const animeImages = root.current.querySelectorAll(".js-imagepopup");
            animeImages.forEach((element, index) => {
                ScrollTrigger.create({
                    trigger: root.current,
                    animation: popUpAnime(element, index),
                    start: "top 60%",
                });
            })
        }, root.current);
        return () => ctx.revert();
    }, []);

    return (
        <ul
            ref={root}
            className={`${styles.container} js-tileTrigger`}
        >
            <li className={`${styles.image} js-imagepopup`}>
                <img src={props.img1} />
            </li>
            <li className={`${styles.image} js-imagepopup`}>
                <img src={props.img2} />
            </li>
            <li className={`${styles.image} js-imagepopup`}>
                <img src={props.img3} />
            </li>
        </ul>
    );
}
