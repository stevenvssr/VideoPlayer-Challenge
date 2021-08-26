import React, { useEffect, useState } from "react";
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton,
  BigPlayButton,
} from "video-react";
import HLSSource from "./HLSSource";
import _get from "lodash/get";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 50%;
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

const VideoTitle = styled.h2`
  background-color: #f3ca20;
  color: black;
  text-align: center;
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export default function VideoRectangle({ videoSelected, videos }) {
  const [videoSource, setVideoSource] = useState(null);
  const [videoName, setVideoName] = useState(null);

  useEffect(() => {
    setVideoSource(_get(videos, `${videoSelected}.path`, ""));
    setVideoName(_get(videos, `${videoSelected}.name`, ""));
  }, [videoSelected, videoSource, videos]);

  return (
    <Wrapper>
      <VideoTitle>{videoName}</VideoTitle>
      <Player autoPlay={true}>
        <BigPlayButton position="center" />
        <HLSSource isVideoChild src={videoSource} />
        <ControlBar>
          <ReplayControl seconds={10} order={1.1} />
          <ForwardControl seconds={30} order={1.2} />
          <CurrentTimeDisplay order={4.1} />
          <TimeDivider order={4.2} />
          <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
          <VolumeMenuButton disabled />
        </ControlBar>
      </Player>
    </Wrapper>
  );
}
