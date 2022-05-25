import React from "react";
import { Link } from "react-router-dom";
import styles from "./SideBar.module.scss";
import className from "classnames/bind";
import { BsSpotify } from "react-icons/bs";

const cx = className.bind(styles);
const menu = [
    {
        path: "/",
        title: "Home",
    },
    {
        path: "/search",
        title: "Search",
    },
    {
        path: "/collection/playlists",
        title: "Your Library",
    },
    {
        path: "/playlist/:id",
        title: "Create Playlist",
    },
    {
        path: "/collection/tracks",
        title: "Liked Songs",
    },
];
const Sidebar = () => {
    return (
        <div className={cx("side-bar")}>
            <div className={cx("wrapper")}>
                <div className={cx("brand-logo")}>
                    <BsSpotify className={cx("icon")} />
                </div>
                <div className={cx("menu")}>
                    <ul className={cx("menu-nav")}>
                        {menu.map((item, idx) => {
                            return (
                                <li key={idx} className={cx("menu-item")}>
                                    <Link to={item.path}>{item.title}</Link>
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
