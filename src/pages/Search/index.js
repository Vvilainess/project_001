import React from "react";
import Header from "../../components/Layout/components/Header";
import styles from "./Search.module.scss";
import className from "classnames/bind";

const cx = className.bind(styles);

const Search = () => {
    return (
        <>
            <Header backgroundColor={"var(--header-color)"} input={true} />
            <div className={cx("content")}>
                <div className="wrapper"></div>
            </div>
        </>
    );
};

export default Search;
