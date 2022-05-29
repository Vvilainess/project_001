import React, { useEffect, useRef } from "react";
import Header from "../../components/Layout/components/Header";
import styles from "./Home.module.scss";
import className from "classnames/bind";

const cx = className.bind(styles);

const Home = () => {
    const homeSecEl = useRef(null);
    useEffect(() => {
        homeSecEl.onscroll = () => {
            console.log("scrolled");
        };
    }, []);
    return (
        <div className={cx("home")} ref={homeSecEl}>
            <Header backgroundColor={"transparent"} input={false} />
            <div
                style={{ backgroundColor: "rgb(224, 224, 224)" }}
                className={cx("spacer")}
            ></div>
            <section className={cx("content")}>
                <div style={{ height: "3000px" }}></div>
            </section>
        </div>
    );
};

export default Home;
