import styles from "./testimonialTitle.module.css";

export default function TestimonialTitle () {
    return (
        <h5 className={styles.testimonialTitle}>
            <span className={styles.testimonialLogo}>Dungeon Delvers Incorporated</span> is recommended by...
        </h5>
    );
}