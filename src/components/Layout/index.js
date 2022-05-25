import React from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import className from "classnames/bind";
import styles from "./Layout.module.scss";
import Playback from "./components/Playback";

const cx = className.bind(styles);
const Layout = ({ headerInput, children }) => {
    return (
        <div className={cx("layout")}>
            <Header headerInput={headerInput} />
            <SideBar />
            <SideBar visible={false} />
            <div className={cx("main-view")}>{children}</div>
            <Playback />
        </div>
    );
};

export default Layout;
