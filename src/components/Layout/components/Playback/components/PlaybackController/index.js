import React from "react";
import className from "classnames/bind";
import styles from "./styles.module.scss";

const cx = className.bind(styles);

const PlaybackController = () => {
    return <div className={cx("playback-controller")}>PlaybackController</div>;
};

export default PlaybackController;
