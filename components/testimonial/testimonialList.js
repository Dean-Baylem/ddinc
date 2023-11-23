import TestimonialIcon from "./testimonialIcon";
import styles from "./testimonialList.module.css";

const list = ["/images/top/icon-rec1.png", "/images/top/icon-rec2.png", "/images/top/icon-rec3.png", "/images/top/icon-rec4.png", "/images/top/icon-rec5.png", "/images/top/icon-rec6.png", "/images/top/icon-rec7.png"];

export default function TestimonialList() {
    return (
        <ul className={styles.list}>
            {list.map((icon, index) => (
                <TestimonialIcon key={index} iconSrc={icon} delay={index}/>
            ))}
        </ul>
    )
}