import React from "react";
import NowPlaying from "./components/NowPlaying";
import PlaybackController from "./components/PlaybackController";
import VolumnController from "./components/VolumnController";
import { FaRandom } from "react-icons/fa";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { GiSpeaker } from "react-icons/gi";
import { MdQueueMusic, MdSpeakerGroup } from "react-icons/md";
import { AiFillPlayCircle } from "react-icons/ai";
import { ImLoop } from "react-icons/im";

import className from "classnames/bind";
import styles from "./Playback.module.scss";

const cx = className.bind(styles);
const Playback = () => {
    return (
        <div className={cx("playback")}>
            <div className={cx("wrapper")}>
                <NowPlaying />
                <PlaybackController />
                <VolumnController />
            </div>
        </div>
    );
};

export default Playback;
