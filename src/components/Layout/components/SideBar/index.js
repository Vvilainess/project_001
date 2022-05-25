import React from "react";
import { Link } from "react-router-dom";
import styles from "./SideBar.module.scss";
import className from "classnames/bind";
import { BsSpotify, BsSearch } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";

const cx = className.bind(styles);
const menu = [
    {
        path: "/",
        title: "Home",
        icon: <AiOutlineHome />,
    },
    {
        path: "/search",
        title: "Search",
        icon: <BsSearch />,
    },
    {
        path: "/collection/playlists",
        title: "Your Library",
        icon: <BiLibrary />,
    },
    {
        path: "/playlist/:id",
        title: "Create Playlist",
        icon: AiOutlineHome,
    },
    {
        path: "/collection/tracks",
        title: "Liked Songs",
        icon: AiOutlineHome,
    },
];
const Sidebar = () => {
    return (
        <div className={cx("side-bar")}>
            <div className={cx("wrapper")}>
                <Link to="/" className={cx("brand-logo")}>
                    <BsSpotify className={cx("icon")} />
                    <span className={cx("brand-title")}>Spotify</span>
                </Link>
                <div className={cx("menu")}>
                    <ul className={cx("menu-nav")}>
                        {menu.map((item, idx) => {
                            return (
                                <li key={idx} className={cx("menu-item")}>
                                    <Link
                                        to={item.path}
                                        className={cx("menu-link")}
                                    >
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
