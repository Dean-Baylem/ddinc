"use client"

import HomeContactForm from "@/components/forms/homeContactForm";
import TextArea from "@/components/Typography/textArea";
import styles from "./homeContact.module.css";
import ContactDisplay from "@/components/Typography/contactDisplay";

const text = [
    "Whether you seek counsel, wish to share your tales of adventure, or simply desire to send your regards, our gates are always open. Feel free to drop us a message, and we'll get back to you as soon as possible. Your feedback and inquiries are important to us, and we're excited to assist you on your gaming journey.",
];

export default function HomeContact() {
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <TextArea
                        container="homeContactDesc"
                        title="Contact Us"
                        text={text}
                        textStyle="smallText"
                    />
                    <div className={styles.banner}>
                        <img
                            src="/images/top/contactBanner.jpg"
                            alt=""
                        />
                    </div>
                    <div className={styles.formContainer}>
                        <HomeContactForm />
                    </div>
                    <ContactDisplay />
                </div>
            </div>
        </section>
    );
}
