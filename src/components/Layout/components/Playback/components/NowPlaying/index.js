import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdOutlineSmartScreen } from "react-icons/md";
import className from "classnames/bind";
import styles from "./styles.module.scss";

const cx = className.bind(styles);

const NowPlaying = () => {
    const [heart, setHeart] = useState(false);
    return (
        <div className={cx("wrapper")}>
            <div className={cx("now-playing-widget")}>
                <div className={cx("image-container")}>
                    <img
                        src="https://i.scdn.co/image/ab67616d000048510785b44c5a814bb1318ebc8e"
                        alt="avatar"
                        className={cx("image")}
                    />
                </div>
                <div className={cx("track-content")}>
                    <div className={cx("track-title")}>
                        <Link to="" className={cx("track-link")}>
                            Track title
                        </Link>
                    </div>
                    <div className={cx("track-artist")}>
                        <span>
                            <Link to="" className={cx("artist-link")}>
                                Artist1,
                            </Link>
                        </span>
                        <span>
                            <Link to="" className={cx("artist-link")}>
                                Artist2
                            </Link>
                        </span>
                    </div>
                </div>
                <button
                    className={cx("control-button", "control-button-heart")}
                    onClick={(prev) => {
                        setHeart(!prev);
                    }}
                >
                    {heart ? (
                        <AiFillHeart className={cx("icon")} />
                    ) : (
                        <AiOutlineHeart className={cx("icon")} />
                    )}
                </button>
                <button
                    className={cx("control-button", "control-button-vision")}
                >
                    <MdOutlineSmartScreen className={cx("icon")} />
                </button>
            </div>
        </div>
    );
};

export default NowPlaying;
