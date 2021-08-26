import React, { Fragment } from "react";
import VideoList from "./VideoList";
import VideoRectangle from "./VideoRectangle";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-items: space-around;


  @media (min-width: 767px) {
    display: grid
    grid-template-columns: 1.5fr 1fr;
    margin: 80px 0;
  }
`;

const ListDiv = styled.div`
  text-align: center;
`;

const Hthree = styled.h3`
  background-color: #f3ca20;
  color: black;
  padding: 10px;
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export default function VideoPlayer({ dispatch, videoSelected, videos }) {
  return (
    <Fragment>
      <Wrapper>
        <VideoRectangle videoSelected={videoSelected} videos={videos} />
        <ListDiv>
          <Hthree>Up Next : </Hthree>
          <VideoList dispatch={dispatch} videos={videos} />
        </ListDiv>
      </Wrapper>
    </Fragment>
  );
}
