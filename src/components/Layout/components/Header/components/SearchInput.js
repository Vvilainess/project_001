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
        <>
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
                <AiOutlineSearch className="absolute top-0 left-0 h-full text-2xl ml-3" />
                {inputValue && (
                    <IoMdClose className="absolute top-0 right-0 h-full text-2xl mr-3 cursor-pointer" />
                )}
                <div className=""></div>
            </form>
        </>
    );
};

export default SearchInput;
