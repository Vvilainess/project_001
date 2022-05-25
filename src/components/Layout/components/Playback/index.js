import React from "react";
import className from "classnames/bind";
import styles from "./Playback.module.scss";

const cx = className.bind(styles);
const Playback = () => {
    return <div className={cx("playback")}>Playback</div>;
};

export default Playback;
