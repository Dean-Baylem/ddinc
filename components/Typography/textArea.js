import styles from "./textArea.module.css";
import PageHeading from "./pageHeading";
import PageText from "./pageText";
import PageNavButton from "../buttons/pageNavButton";

export default function TextArea(props) {
    return (
        <div className={styles[props.container]}>
            {props.title && (
                <PageHeading
                    animate={props.titleAnimate}
                    addedStyle={props.titleStyle}
                >
                    {props.title}
                </PageHeading>
            )}
            {props.subtitle && (
                <PageHeading
                    subAnimate={props.subtitleAnimate}
                    addedStyle={props.subtitleStyle}
                >
                    {props.subtitle}
                </PageHeading>
            )}
            <PageText
                content={props.text}
                textStyle={props.textStyle}
                animate={props.textAnimate}
            />
            {props.button && (
                <PageNavButton
                    linkTo={props.linkTo}
                    linkText={props.linkText}
                    buttonClass={props.buttonClass}
                />
            )}
        </div>
    );
}
