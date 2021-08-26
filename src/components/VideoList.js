import React from "react";
import actions from "../state/actions";
import VideoThumbnail from "./VideoThumbnail";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 530px;
  overflow: hidden;
  background-color: white;
  border: 3px solid #f3ca20;
  padding: 10px;
  background-color: black;

  :hover {
    overflow-y: scroll;
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 767px) {
    width: auto;
  }
`;

export default function VideoList({ dispatch, videos }) {
  const sorted = videos.sort(function (a, b) {
    let textA = a.name.toUpperCase();
    let textB = b.name.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });

  return (
    <Wrapper>
      {sorted.map((video, i) => {
        return (
          <VideoThumbnail
            dispatch={dispatch}
            key={`${video.name}-thumbnail`}
            name={video.name}
            onClick={() => {
              dispatch({ type: actions.SELECT_VIDEO, payload: i });
            }}
            src={video.thumbnail}
          />
        );
      })}
    </Wrapper>
  );
}
