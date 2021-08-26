import React, { useEffect, useReducer } from "react";
import "./App.css";
import "video-react/dist/video-react.css";
import initialState from "./state/initial-state";
import actions from "./state/actions";
import rootReducer from "./state/root-reducer";
import VideoPlayer from "./components/VideoPlayer";
import videoData from "./video-data.json";
import { Navbar } from "./components/Navbar";
import { BiCameraMovie } from "react-icons/bi";

function App() {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  const {
    player: { videoSelected, videos },
  } = state;

  useEffect(() => {
    dispatch({
      type: actions.HYDRATE_VIDEO_DATA,
      payload: videoData.videos,
    });
  }, []);

  return (
    <>
      <Navbar>
        <h2>
          TouchTribe Videos <BiCameraMovie />
        </h2>
      </Navbar>
      <VideoPlayer
        dispatch={dispatch}
        videoSelected={videoSelected}
        videos={videos}
      />
    </>
  );
}

export default App;
