"use client";

import React, { useEffect, useState, useReducer, useRef } from "react";
import MainToolDisplay from "./mainDisplay";
import styles from "./toolDisplay.module.css";
import { client } from "@/libs/client";
import { Transition } from "react-transition-group";

export default function ToolDisplay() {
    const [toolList, setToolList] = useState([]);
    const [selectedTool, setSelectedTool] = useState();
    const [nextTool, setNextTool] = useState([]);
    const [remove, setRemove] = useState(false);
    const [show, setShow] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await client.get({
                    endpoint: "tooldetails",
                });
                setToolList(response.contents);
                setSelectedTool(response.contents[0]);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const handleRemove = (id) => {
        const chosen = toolList.filter((tool) => tool.id === id);
        setNextTool(chosen[0]);
        setRemove(true);
        setShow(false);
        console.log("Removing")
    };

    const handleShow = () => {
        setSelectedTool(nextTool);
        setRemove(!remove);
        setShow(!show)
    };

    return (
        <section className={`${styles.section} TestName`}>
            <div className={styles.mainContainer}>
                <ul className={styles.toolList}>
                    {toolList.map((item) => (
                        <li
                            className={styles.toolSelector}
                            key={item.id}
                            onClick={() => {
                                handleRemove(item.id);
                            }}
                        >
                            {item.title}
                        </li>
                    ))}
                </ul>
                {!loading && (
                    <MainToolDisplay
                        displayType={selectedTool.displayType[0]}
                        mainImgSrc={selectedTool.mainImg.url}
                        mainImgType={selectedTool.mainImgType}
                        subImgSrc={selectedTool.subImg.url}
                        subImgType={selectedTool.subImgType}
                        tertiaryImgSrc={selectedTool.tertiaryImg && selectedTool.tertiaryImg.url}
                        tertiaryImgType={selectedTool.tertiaryImgType && selectedTool.tertiaryImgType}
                        toolTitle={selectedTool.title}
                        text={[selectedTool.text]}
                        textContainer="toolTextContainer"
                        toolLink={selectedTool.toolLink}
                        linkText={selectedTool.linkText}
                        remove={remove}
                        handleShow={handleShow}
                        show={show}
                    />
                )}
            </div>
        </section>
    );
}
