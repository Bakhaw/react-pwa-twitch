import React from 'react';
import styled from 'styled-components';

import BottomBar from './BottomBar';
import Chat from './Chat';
import TopBar from './TopBar';
import Video from './Video';
import { layout } from '../../stylesheets';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: ${`calc(100vh - ${layout.NavBar.height})`};
  iframe {
    height: 100%;
    width: 100%;
  }
`;

const VideoWrapper = styled.div`
  padding: 40px 30px;
  width: calc(100vw - ${layout.Chat.width}px);
  overflow-y: scroll;
  @media (max-width: 1000px) {
    width: 100vw;
    padding: 20px 10px;
  }
`;

const Stream = ({ channel, query = `channel=${channel.login}` }) => {
  return (
    <Wrapper>
      <VideoWrapper>
        <TopBar channel={channel} />
        <Video channel={channel} query={query} />
        <BottomBar channel={channel} />
      </VideoWrapper>
      <Chat channel={channel} />
    </Wrapper>
  );
};

export default Stream;
