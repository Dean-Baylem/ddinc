import React from "react";
import Header from "@/components/navigation/header";
import globalStyles from "./globals.css";
import styles from "./page.module.css";
import HomeTitle from "./homeSections/homeTitle";
import HomeAbout from "./homeSections/homeAbout";
import HomePoints from "./homeSections/homePoints";
import Testimonial from "./homeSections/testimonial";
import TestimonialText from "@/components/testimonial/testimonialText";
import TestimonialIcon from "@/components/testimonial/testimonialIcon";
import HomeTools from "./homeSections/homeTools";
import TestimonialList from "@/components/testimonial/testimonialList";
import TestimonialTitle from "@/components/testimonial/testimonialTitle";
import HomeContact from "./homeSections/homeContact";

export default async function Home() {
    return (
        <React.Fragment>
            <Header />
            <main className={styles.main}>
                <HomeTitle />
                <HomeAbout />
                <HomePoints />
                <Testimonial>
                    <TestimonialText>
                        Dungeon Delvers Incorporated is a game-changer. It streamlines campaign {"\n"}
                        management, enhances storytelling, and the community is priceless. It's my {"\n"} treasure for unforgettable gaming
                        adventures.`
                    </TestimonialText>
                    <TestimonialIcon
                        name="500GP Diamond"
                        title
                        iconSrc="/images/top/icon-diamond.png"
                        delay={1}
                    />
                </Testimonial>
                <HomeTools />
                <Testimonial>
                    <TestimonialTitle />
                    <TestimonialList />
                </Testimonial>
                <HomeContact />
            </main>
        </React.Fragment>
    );
}
