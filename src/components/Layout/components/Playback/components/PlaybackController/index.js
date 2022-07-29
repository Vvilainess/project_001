import React from "react";
import className from "classnames/bind";
import styles from "./styles.module.scss";

import { FaRandom } from "react-icons/fa";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { AiFillPlayCircle } from "react-icons/ai";
import { TiArrowLoop } from "react-icons/ti";

const cx = className.bind(styles);

const PlaybackController = () => {
    return (
        <div className={cx("playback-controller")}>
            <div className={cx("wrapper")}>
                <div className={cx("player-controller")}>
                    <div className={cx("player-controller__left")}>
                        <button className={cx("button")}>
                            <FaRandom />
                        </button>
                        <button className={cx("button")}>
                            <BiSkipPrevious />
                        </button>
                    </div>
                    <div className={cx("player-controller__center")}>
                        <button className={cx("play-button")}>
                            <AiFillPlayCircle className={cx("icon")} />
                        </button>
                    </div>
                    <div className={cx("player-controller__right")}>
                        <button className={cx("button")}>
                            <BiSkipNext className={cx("icon")} />
                        </button>
                        <button className={cx("button")}>
                            <TiArrowLoop className={cx("icon")} />
                        </button>
                    </div>
                </div>
                <div className={cx("player-bar")}>
                    <div className={cx("player-bar__wrapper")}>
                        <div className={cx("starting-time")}>00:00</div>
                        <input
                            id="progress"
                            class="progress"
                            type="range"
                            value="0"
                            step="1"
                            min="0"
                            max="100"
                        ></input>
                        <div className={cx("ending-time")}>05:00</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaybackController;
