import OverlapCard from "@/components/cards/overlapCard";
import styles from "./homePoints.module.css";

export default function HomePoints() {
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <OverlapCard
                    title="User-Centric Design"
                    text={[
                        "We put you, the game master, at the center of our design philosophy. Our user-friendly interface and intuitive features are crafted with your needs in mind. Your feedback shapes our ongoing improvements, ensuring that Dungeon Delvers Incorporated remains your trusty companion on every quest. For more information, explore our features page.",
                    ]}
                    button={true}
                    linkTo="#"
                    linkText="Discover Features"
                    buttonClass="btn__left"
                    imgSrc="/images/top/point1.jpg"
                    number="01"
                    numberStyle="numberLeft"
                />
                <OverlapCard
                    title="Unlock Creativity"
                    text={[
                        "We firmly believe that when campaign management is simplified, creativity flourishes. By freeing you from the burdensome details, you can invest more of your creative energy in crafting worlds, characters, and plot twists that leave your players spellbound. Our community catalogues creative commendations over on Discord. Join the Creative Hub Now - Explore, Create, Connect!",
                    ]}
                    textAreaPosition="inverseTextArea"
                    button={true}
                    linkTo="#"
                    linkText="Join Now"
                    buttonClass="btn__left"
                    imgSrc="/images/top/point2.jpg"
                    number="02"
                    numberStyle="numberRight"
                />
                <OverlapCard
                    title="Effortless Organization"
                    text={[
                        "We're here to untangle the web of notes, character sheets, maps, and plot threads that can accumulate during a campaign. Our platform provides a central command center where you can effortlessly organize your campaign elements, allowing you to focus on storytelling rather than administration.",
                    ]}
                    button={true}
                    linkTo="#"
                    linkText="Sign Up Now"
                    buttonClass="btn__left"
                    imgSrc="/images/top/point3.jpg"
                    number="03"
                    numberStyle="numberLeft"
                />
            </div>
        </section>
    );
}