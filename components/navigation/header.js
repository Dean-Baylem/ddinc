import Image from "next/image";
import headerStyles from "./header.module.css";
import Link from "next/link";

const navList = [
    {
        link: "#",
        text: "Home",
    },
    {
        link: "#",
        text: "Features",
    },
    {
        link: "#",
        text: "Pricing",
    },
    {
        link: "#",
        text: "Discord",
    },
];

export default function Header() {
    return (
        <header className={headerStyles.header}>
            <Image
                src="/header/logo-no-background.png"
                width={308}
                height={90}
                alt={"Dungeon Delvers Incorportated"}
            />
            <nav className={headerStyles.navi}>
                <ul className={headerStyles.navList}>
                    {navList.map((listItem, index) => (
                        <li
                            key={index}
                            className={headerStyles["navList--item"]}
                        >
                            <Link href={listItem.link}>{listItem.text}</Link>
                        </li>
                    ))}
                    <li className={headerStyles["navList--register"]}>
                       <Link href="#">Register</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
