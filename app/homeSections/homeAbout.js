
import styles from "./homeAbout.module.css";
import ImageTiles from "./imageTiles";
import TextArea from "@/components/Typography/textArea";


const text = [
    "Welcome to Dungeon Delvers Incorporated, where we bring your tabletop RPG campaigns to life with streamlined campaign management tools. Our mission is to provide game masters with an intuitive and user-friendly platform that simplifies the intricacies of managing and orchestrating epic adventures. ",
    "At Dungeon Delvers Incorporated, we understand the passion and dedication that go into crafting immersive stories and unique worlds for your players. We've developed a platform that empowers game masters to focus on what they do best—sparking creativity and crafting unforgettable narratives. Our tools are designed to enhance the storytelling experience, offering a seamless and organized approach to campaign management",
];

export default function HomeAbout() {

    return (
        <section
            className={`${styles.section} `}
        >
            <div className={`${styles.wrapper}`}>
                <ImageTiles
                    img1="/images/top/column1.png"
                    img2="/images/top/column2.png"
                    img3="/images/top/column3.png"
                />
                <TextArea
                    subtitle="Simplified"
                    subtitleStyle="subtitle"
                    title="Campaign Management;"
                    text={text}
                    textStyle="smallText"
                    titleAnimate={true}
                    subtitleAnimate={true}
                    textAnimate={true}
                />
            </div>
        </section>
    );
}
