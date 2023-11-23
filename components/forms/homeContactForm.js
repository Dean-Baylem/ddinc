"use client";
import styles from "./formStyles.module.css";
import { useForm } from "react-hook-form";

export default function HomeContactForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const handleError = (errors) => {};

    const registerOptions = {
        name: { required: "Name is required" },
        email: {
            required: "Email is required",
        },
        message: {
            required: "Please input your message",
        },
    };

    const onSubmit = async (data) => {
        const body = {
            name: data.name,
            email: data.email,
            message: data.message,
        };
        await fetch("/api/contact", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        }).then((res) => {
            console.log("Response received");
            if (res.status === 200) {
                console.log("Response succeded!");
            } else {
                console.log("Failed...");
            }
        });
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.homeContactForm}
        >
            <div className={styles.formRow}>
                <label>Name</label>
                <input
                    type="text"
                    className={styles.homeContactForm}
                    {...register("name", {
                        required: true,
                        maxLength: 50,
                    })}
                />
                <small className={styles.errorText}>{errors?.name && errors.name.message}</small>
            </div>
            <div className={styles.formRow}>
                <label>Email</label>
                <input
                    type="email"
                    {...register("email", {
                        required: true,
                        maxLength: 200,
                        matchPattern: (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "Email address must be a valid address",
                    })}
                />
            </div>
            <div className={styles.formRow}>
                <label>Message</label>
                <textarea
                    rows="8"
                    {...register("message", {
                        required: false,
                    })}
                ></textarea>
            </div>
            <input
                className={styles.submitBtn}
                type="submit"
                value="Send Message"
            ></input>
        </form>
    );
}
