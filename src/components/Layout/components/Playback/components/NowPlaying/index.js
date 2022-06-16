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
        <div className={cx("now-playing-widget")}>
            <div className={cx("flex-center")}>
                <div className={cx("image-container")}>
                    <img
                        src="https://i.scdn.co/image/ab67616d000048510785b44c5a814bb1318ebc8e"
                        alt="avatar"
                        className={cx("image")}
                    />
                </div>
                <div className={cx("track-content")}>
                    <div
                        className={cx(
                            "track-title mx-3 items-center text-white font-md hover:underline transition-all duration-150"
                        )}
                    >
                        Track Title
                    </div>
                    <div className="flex flex-1 flex-row">
                        <span>
                            <Link
                                to=""
                                className="text-[#b3b3b3] hover:text-white text-xs hover:underline transition-all duration-150"
                            >
                                Artist1,
                            </Link>
                        </span>
                        <span>
                            <Link
                                to=""
                                className="text-[#b3b3b3] hover:text-white text-xs hover:underline transition-all duration-150"
                            >
                                Artist2
                            </Link>
                        </span>
                    </div>
                </div>
                <button
                    className="px-3 text-xl"
                    onClick={(prev) => {
                        setHeart(!prev);
                    }}
                >
                    {heart ? (
                        <AiFillHeart className="text-emerald-700 text-xl font-bold " />
                    ) : (
                        <AiOutlineHeart className="text-white text-xl font-bold" />
                    )}
                </button>
                <button className="px-3 text-xl">
                    <MdOutlineSmartScreen className="text-white font-lg font-bold" />
                </button>
            </div>
        </div>
    );
};

export default NowPlaying;
