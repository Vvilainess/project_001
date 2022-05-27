import React, { useEffect, useRef } from "react";
import Header from "../../components/Layout/components/Header";
import styles from "./Home.module.scss";
import className from "classnames/bind";

const cx = className.bind(styles);

const Home = () => {
    const homeSecEl = useRef(null);
    const handleResize = () => {
        window.onscroll = () => {
            console.log(homeSecEl);
        };
    };
    useEffect(() => {
        handleResize();
    }, []);
    return (
        <div className={cx("home")} ref={homeSecEl}>
            <Header backgroundColor={"transparent"} input={false} />
            <div
                style={{ backgroundColor: "rgb(224, 224, 224)" }}
                className={cx("spacer")}
            ></div>
            <section className={cx("content")}></section>
        </div>
    );
};

export default Home;
