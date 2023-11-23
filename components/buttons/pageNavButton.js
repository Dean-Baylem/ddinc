import styles from "./pageNavButton.module.css"
import Link from "next/link";

export default function PageNavButton(props) {
    return (
    <Link className={`${styles.base} ${styles[props.buttonClass]}`} href={props.linkTo}>{props.linkText}</Link>
    );
} 