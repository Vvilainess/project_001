import React from "react";
import className from "classnames/bind";
import styles from "./Header.module.scss";
import SearchInput from "./components/SearchInput";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";

const cx = className.bind(styles);
const Header = ({ backgroundColor, input }) => {
    return (
        <div
            style={{ backgroundColor: backgroundColor }}
            className={cx("header")}
        >
            <div className={cx("wrapper")}>
                <div className={cx("navigate")}>
                    <button className={cx("navigate-button")}>
                        <IoIosArrowBack className={cx("icon")} />
                    </button>
                    <button className={cx("navigate-button")}>
                        <IoIosArrowForward className={cx("icon")} />
                    </button>
                </div>
                {input ? <SearchInput /> : <></>}
                <div className={cx("user-button")}>
                    <img
                        src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
                        alt="user-avatar"
                    />
                    <span className={cx("user-name")}>Phung Truong Giang</span>
                    <MdArrowDropDown />
                </div>
            </div>
        </div>
    );
};

export default Header;
