"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import homeTitleStyles from "./homeTitle.module.css";
gsap.registerPlugin(ScrollTrigger);

export default function HomeTitle() {
    const root = useRef();

    const titleAnime = () => {
        const tl = gsap.timeline();
        tl.to(".js-title__main1", { width: "100%", duration: 2 });
        tl.to(".js-title__main2", { width: "100%", duration: 2 }, "-=0.5");
        tl.to(".js-title__lead", { opacity: 1, y: 0, duration: 0.5 }, "-=0.2");
        tl.to(".js-titleBox", { opacity: 1, y: 0, duration: 0.5 }, "<");
    };

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: ".js-popupText",
                animation: titleAnime(),
            });
        }, root);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={root}
            className={`${homeTitleStyles["title__section"]}`}
        >
            <h5 className={`${homeTitleStyles["title__lead"]} js-title__lead`}>Where Adventures Begin</h5>
            <h1 className={`${homeTitleStyles["title__main"]}`}>
                <span className="js-title__main1">Dungeon Delvers</span>
                <br />
                <span className="js-title__main2">Incorporated</span>
            </h1>
            <a className={`${homeTitleStyles["title__link"]} js-titleBox`}><span></span>Join the Quest</a>
        </section>
    );
}
