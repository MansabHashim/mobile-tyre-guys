'use client';

import React, { useEffect, useRef } from 'react';

const YouTubeEmbed = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    const player = iframe?.contentWindow;
    
    if (player) {
      player.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    }
  }, []);

  const fileId = '1M1ENrYfLe92dhL_wQkf6ZiA8Ca-4wr3v'; // Replace with your actual file ID

  const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;

  return (
    <div className="video-container">
      <iframe
        ref={iframeRef}
        src={embedUrl}
        width="640"
        height="360"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
        title="Google Drive Video"
      ></iframe>
      <style jsx>{`
        .video-container {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 aspect ratio */
          height: 0;
          overflow: hidden;
          max-width: 100%;
          background: #000;
        }
        iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default YouTubeEmbed;
