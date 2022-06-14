import React from "react";
import className from "classnames/bind";
import styles from "./styles.module.scss";

const cx = className.bind(styles);
const VolumnController = () => {
    return <div className={cx("volumn-controller")}>VolumnController</div>;
};

export default VolumnController;
