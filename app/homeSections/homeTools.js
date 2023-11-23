"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RoundedImg from "@/components/images/roundedImg";
import styles from "./homeTools.module.css";
import TextArea from "@/components/Typography/textArea";
import MainToolDisplay from "../toolDisplay/mainToolDisplay";
gsap.registerPlugin(ScrollTrigger);

const text = [
    "Dungeon Delvers Incorporated presents an intuitive and meticulously organized tool to manage the timeline of your campaign world.",
    "With a strong emphasis on clarity and user-friendly navigation, our 'World Timeline' feature ensures that every detail is just a click away.",
    "This feature empowers you to maintain a neatly organized campaign, eliminating the need to juggle stacks of notes and documents. It streamlines your storytelling process, allowing you to efficiently craft immersive narratives that captivate your players.",
];

const text2 = [
    "Dive into a series of small web applications within Dungeon Delvers Incorporated, meticulously crafted to enhance your role as a game master. ",
    "These tools are designed to smooth the running of your TTRPG games, enabling you to focus on storytelling, player engagement, and immersion, while the platform takes care of the logistical details.",
];

export default function HomeTools() {

    const root = useRef(null);

    const popUpText = () => {
        return gsap.to(root.current, { opacity: 1, x: 0, duration: 0.4 });
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
        <section ref={root} className={styles.section}>
            <h2 className={styles.title}>
                Unlocking Your TTRPG Mastery with
                <br />
                <span className={styles.logo}>Dungeon Delvers Incorporated</span>
            </h2>
            <div className={styles.mainContainer}>
                <RoundedImg
                    imgSrc="/images/top/bubble1.jpg"
                    class="rounded1"
                    width="265"
                    height="265"
                />
                <RoundedImg
                    imgSrc="/images/top/bubble2.jpg"
                    class="rounded2"
                    width="491"
                    height="491"
                />
                <RoundedImg
                    imgSrc="/images/top/bubble3.jpg"
                    class="rounded3"
                    width="313"
                    height="313"
                />
                <TextArea
                    container="timeline"
                    title={`World Timeline - Streamlined\nCampaign Management`}
                    titleStyle="titleSmall"
                    text={text}
                    textStyle="midText"
                    titleAnimate={true}
                    subtitleAnimate={true}
                    textAnimate={true}
                />
            </div>
            <div className={styles.display}>
                <img
                    className={styles.displayImg}
                    src="/images/top/toolDisplay1.jpg"
                />
            </div>
            <TextArea
                container="GMTools"
                title={`Game Master Tools\nElevate Your TTRPG Experience`}
                titleStyle="titleSmall"
                text={text2}
                textStyle="midText"
                button
                linkTo="#"
                linkText="Enhance Your Games"
                buttonClass="toolsBtn"
            />
            <MainToolDisplay />
        </section>
    );
}
