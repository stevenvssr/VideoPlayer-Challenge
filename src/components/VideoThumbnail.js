import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
  padding: 10px;
  border: 3px solid silver;
  border-radius: 2%;
  background-color: white;
  width: 100%;

  &:hover {
    cursor: pointer;
    border: 3px solid #f3ca20;
  }

  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
`;

export default function VideoThumbnail({ src, name, onClick }) {
  return (
    <Wrapper onClick={onClick}>
      <img alt="name" src={src} />
      <span>{name}</span>
    </Wrapper>
  );
}
