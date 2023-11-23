import styles from "./contactDisplay.module.css";

export default function ContactDisplay () {

    const socials = [
        {
            name: "discord",
            image: "icon-discord.png",
            link: "https://www.discord.com",
        },
        {
            name: "youtube",
            image: "icon-youtube.png",
            link: "https://www.youtube.com",
        },
        {
            name: "reddit",
            image: "icon-reddit.png",
            link: "https://www.reddit.com",
        },
        {
            name: "twitch",
            image: "icon-twitch.png",
            link: "https://www.twitch.com",
        },
    ];

    return (
        <div className={styles.conatctDetails}>
            <h3 className={styles.contactTitle}>Dungeon Delvers Incorporated</h3>
            <p className={styles.telephone}>
                <strong>Tel:</strong> 0123 - 456 - 789
            </p>
            <p className={styles.address}>
                The Dungeon
                <br />
                Dragon's Roost
                <br />
                Enchanted Forest
                <br />
                Mystical Kingdom
                <br />
                Fairyland
                <br />
                FANT-ASY 123
            </p>
            <ul className={styles.socialsList}>
                {socials.map((social, index) => (
                    <li className={styles.socialIconItem} key={index}>
                        <a href={social.link} target="_blank">
                            <img src={`images/socials/${social.image}`} alt={social.name}/>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}