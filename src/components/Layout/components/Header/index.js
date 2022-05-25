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
                        src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-1/178979870_1537543346584459_6440505385994778302_n.jpg?stp=c7.0.40.40a_cp0_dst-jpg_p40x40&_nc_cat=100&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=N_d9-l-c4lcAX8oIhRd&_nc_ht=scontent.fhan2-4.fna&oh=00_AT_vzP8WeqFt9RrM3CVBjnGo8hC1X2x6eNmCaHTQx3Zv1g&oe=62929587"
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
