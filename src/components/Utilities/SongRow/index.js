import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const SongRow = () => {
    <div className={cx("song-row")}>
        <h1 className={cx("title")}>Song Title</h1>
        <div className="grid gap-x-6 xs:grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xxl:grid-cols-6 py-5"></div>
    </div>;
};
export default SongRow;
