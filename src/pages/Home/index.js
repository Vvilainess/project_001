import React from "react";
import Header from "../../components/Layout/components/Header";
import styles from "./Home.module.scss";
import className from "classnames/bind";

const cx = className.bind(styles);

const Home = () => {
    return (
        <div className={cx("home")}>
            <Header backgroundColor={"transparent"} input={false} />
            <div
                style={{ backgroundColor: "rgb(224, 224, 224)" }}
                className={cx("spacer")}
            ></div>
        </div>
    );
};

export default Home;
