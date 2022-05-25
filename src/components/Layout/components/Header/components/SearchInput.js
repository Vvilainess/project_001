import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import styles from "./SearchInput.module.scss";
import className from "classnames/bind";

const cx = className.bind(styles);
const SearchInput = () => {
    const [inputValue, setInputValue] = useState("");
    useEffect(() => {}, []);
    return (
        <div className={cx("form-wrapper")}>
            <form action="#" autoComplete="off" className={cx("form")}>
                <input
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                    }}
                    type="text"
                    name="search"
                    placeholder="Artists, songs, or podcasts"
                    className={cx("form-input")}
                />
                <AiOutlineSearch className={cx("search-icon")} />
                {inputValue && <IoMdClose className={cx("close-button")} />}
                <div className=""></div>
            </form>
        </div>
    );
};

export default SearchInput;
