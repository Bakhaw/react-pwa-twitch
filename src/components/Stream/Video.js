import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  margin: 20px 0;
  @media (max-width: 1000px) {
    height: 50vh;
  }
`;

const Video = ({ channel, query }) => (
  <Wrapper>
    <iframe
      allowFullScreen
      frameBorder={0}
      scrolling='no'
      src={`https://player.twitch.tv/?${query}&parent=${window.location.hostname}`}
      title={`${channel.login} live stream video`}
    />
  </Wrapper>
);

Video.propTypes = {
  channel: PropTypes.object,
};

export default Video;
