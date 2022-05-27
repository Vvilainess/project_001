import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SideBar.module.scss";
import className from "classnames/bind";
import { BsSpotify, BsSearch, BsPlusSquare } from "react-icons/bs";
import { AiOutlineHome, AiFillHeart } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
import { MdDownloadForOffline } from "react-icons/md";

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
];
const Sidebar = () => {
    const sideBarEl = useRef(null);
    const playlistEl = useRef(null);
    const sideBarLogoEl = useRef(null);
    const sideBarMenuEl = useRef(null);
    const sideBarFeatEl = useRef(null);
    const installButtonEL = useRef(null);
    const [playlistHeight, setPlaylistHeight] = useState(null);
    useEffect(() => {
        let height =
            sideBarEl.current.offsetHeight -
            sideBarLogoEl.current.offsetHeight -
            sideBarMenuEl.current.offsetHeight -
            sideBarFeatEl.current.offsetHeight -
            installButtonEL.current.offsetHeight;
        setPlaylistHeight(height);
    }, []);
    return (
        <div className={cx("side-bar")} ref={sideBarEl}>
            <div className={cx("wrapper")}>
                <Link to="/" className={cx("brand-logo")} ref={sideBarLogoEl}>
                    <BsSpotify className={cx("icon")} />
                    <span className={cx("brand-title")}>Spotify</span>
                </Link>
                <div className={cx("menu")} ref={sideBarMenuEl}>
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
                <div className={cx("feature")} ref={sideBarFeatEl}>
                    <div className={cx("wrapper")}>
                        <Link
                            to="/collection/:id"
                            className={cx("feature-link")}
                        >
                            <BsPlusSquare className={cx("icon")} />
                            <span>Create Playlist</span>
                        </Link>
                        <Link
                            to="/collection/tracks"
                            className={cx("feature-link")}
                        >
                            <AiFillHeart className={cx("icon")} />
                            <span>Liked Songs</span>
                        </Link>
                    </div>
                </div>
                <div
                    className={cx("playlist")}
                    style={{ maxHeight: playlistHeight - 38 - 9 }}
                    ref={playlistEl}
                >
                    <div className={cx("wrapper")}>
                        <Link to="/" className={cx("playlist-item")}>
                            Playlist Item
                        </Link>
                        <Link to="/" className={cx("playlist-item")}>
                            Playlist Item
                        </Link>
                        <Link to="/" className={cx("playlist-item")}>
                            Playlist Item
                        </Link>
                        <Link to="/" className={cx("playlist-item")}>
                            Playlist Item
                        </Link>
                        <Link to="/" className={cx("playlist-item")}>
                            Playlist Item
                        </Link>
                        <Link to="/" className={cx("playlist-item")}>
                            Playlist Item
                        </Link>
                        <Link to="/" className={cx("playlist-item")}>
                            Playlist Item
                        </Link>
                        <Link to="/" className={cx("playlist-item")}>
                            Playlist Item
                        </Link>
                        <Link to="/" className={cx("playlist-item")}>
                            Playlist Item
                        </Link>
                        <Link to="/" className={cx("playlist-item")}>
                            Playlist Item
                        </Link>
                        <Link to="/" className={cx("playlist-item")}>
                            Playlist Item
                        </Link>
                        <Link to="/" className={cx("playlist-item")}>
                            Playlist Item
                        </Link>
                        <Link to="/" className={cx("playlist-item")}>
                            Playlist Item
                        </Link>
                        <Link to="/" className={cx("playlist-item")}>
                            Playlist Item
                        </Link>
                        <Link to="/" className={cx("playlist-item")}>
                            Playlist Item
                        </Link>
                        <Link to="/" className={cx("playlist-item")}>
                            Playlist Item
                        </Link>
                        <Link to="/" className={cx("playlist-item")}>
                            Playlist Item
                        </Link>
                        <Link to="/" className={cx("playlist-item")}>
                            Playlist Item
                        </Link>
                        <Link to="/" className={cx("playlist-item")}>
                            Playlist Item
                        </Link>
                        <Link to="/" className={cx("playlist-item")}>
                            Playlist Item
                        </Link>
                    </div>
                </div>
                <div className={cx("install")} ref={installButtonEL}>
                    <Link to="/download" className={cx("install-link")}>
                        <MdDownloadForOffline className={cx("icon")} />
                        <span>Install App</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
