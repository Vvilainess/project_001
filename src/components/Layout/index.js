import React from "react";
import SideBar from "./components/SideBar";
import className from "classnames/bind";
import styles from "./Layout.module.scss";
import Playback from "./components/Playback";

const cx = className.bind(styles);
const Layout = ({ children }) => {
    return (
        <div className={cx("layout")}>
            <SideBar />
            <div className={cx("main-view")}>{children}</div>
            <Playback />
        </div>
    );
};

export default Layout;
