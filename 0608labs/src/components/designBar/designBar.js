import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const DesignBarSection = styled.section`
  padding: 40px 0;
  background-color: #1a1a1a;
`;

const DesignBarContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
  background-color: #2a2a2a;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Video = styled.video`
  width: 100%;
  display: block;
`;

const DesignBar = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('error', (e) => {
        console.error("Video error:", e);
      });
    }
  }, []);

  return (
    <DesignBarSection>
      <DesignBarContainer>
        <Video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          controls
          onError={(e) => console.error("Video error:", e)}
        >
          <source src={`${process.env.PUBLIC_URL}/designBar/designBarVideo.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
      </DesignBarContainer>
    </DesignBarSection>
  );
};

export default DesignBar;