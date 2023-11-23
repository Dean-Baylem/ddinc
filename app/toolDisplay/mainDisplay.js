"use client";

import React, { useEffect, useCallback, useRef, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import TextArea from "@/components/Typography/textArea";
import styles from "./toolDisplay.module.css";

export default function MainToolDisplay(props) {
    const root = useRef();

    useEffect(() => {
        if (props.remove) {
            removeElements();
        }
    }, [props.remove]);

    const removeElements = () => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.fromTo(".js-textArea", { scale: 1, opacity: 1 }, { scale: 0, opacity: 0, duration: 0.5, ease: "power2.inOut" });
            tl.fromTo(".js-img1", { y: 0, opacity: 1 }, { y: 100, opacity: 0, duration: 0.5, ease: "sine.out" }, "<+=0.3");
            tl.fromTo(".js-img2", { x: 0, opacity: 1 }, { x: -100, opacity: 0, duration: 0.5, ease: "power2.out" }, "<");
            tl.fromTo(".js-img3", { x: 0, opacity: 1 }, { x: 100, opacity: 0, duration: 0.5, ease: "power2.out" }, "<");
            tl.fromTo(".js-title", { y: 0, opacity: 1 }, { y: -100, opacity: 0, duration: 0.5, ease: "power2.inOut" }, "<");
            tl.eventCallback("onComplete", props.handleShow);
        }, root);

        return () => ctx.revert();
    };

    useLayoutEffect(() => {
        if (props.show) {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.fromTo(".js-title", { y: -100, opacity: 0}, {y: 0, opacity: 1, duration: 0.5, ease: "power2.inOut"})
            tl.fromTo(".js-img1", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "sine.inOut"}, "<+0.3");
            tl.fromTo(".js-img2", { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power2.inOut" }, "<");
            {props.tertiaryImgSrc &&
            tl.fromTo(
                ".js-img3",
                { x: 100, opacity: 0 },
                { x: 0, opacity: 1, duration: 1, ease: "power2.inOut" },
                "<"
            )}
            tl.fromTo(".js-textArea", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "power2.inOut" }, "<+0.3");
        }, root);

        return () => ctx.revert();
    }
    }, [props.show]);

    return (
        <div className={`${styles.displayContainer}`}>
            <div
                ref={root}
                className={`${styles.mainDisplay} ${styles[props.displayType]}`}
            >
                <img
                    className={`${styles.mainImg} ${styles[props.mainImgType]} js-img1`}
                    src={props.mainImgSrc}
                />
                <img
                    className={`${styles.subImg} ${styles[props.subImgtype]} js-img2`}
                    src={props.subImgSrc}
                />
                {props.tertiaryImgSrc && (
                    <img
                        className={`${styles.tertiaryImg} ${styles[props.tertiaryImgType]} js-img3`}
                        src={props.tertiaryImgSrc}
                    />
                )}
                <h5 className={`${styles.toolTitle} ${styles.toolTitleType} js-title`}>{props.toolTitle}</h5>
                <div className={`${styles.displayTextArea} js-textArea`}>
                    <TextArea
                        container={props.textContainer}
                        text={props.text}
                        textStyle="smallText"
                    />
                </div>
            </div>
        </div>
    );
}
