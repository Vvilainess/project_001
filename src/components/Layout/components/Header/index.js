import React from "react";
import className from "classnames/bind";
import styles from "./Header.module.scss";
import SearchInput from "./components/SearchInput";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

const cx = className.bind(styles);
const Header = ({ headerInput }) => {
    return (
        <div className={cx("header")}>
            <div className={cx("navigate-button")}>
                <button className={cx("button prev")}>
                    <MdArrowBackIos className={cx("icon")} />
                </button>
                <button className={cx("button next")}>
                    <MdArrowForwardIos className={cx("icon")} />
                </button>
            </div>
            {headerInput ? <SearchInput /> : <></>}
            <div className={cx("user-button")}>
                <img
                    src="https://platform-lookaside.fbsbx.com/platform/prof…width=300&ext=1656056587&hash=AeQRsdzDQYkCuhPOUyA"
                    alt="user-avatar"
                />
                <span className={cx("user-name")}>Phung Truong Giang</span>
            </div>
        </div>
    );
};

export default Header;
