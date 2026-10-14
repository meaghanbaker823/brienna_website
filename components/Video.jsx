import YouTube from 'react-youtube';
import PropTypes from 'prop-types';
import { useRef } from 'react';

export default function Video({ video_id, video_title}) {
  // set the if playing or not
  const playerRef = useRef(null);

  const handleReady = ({ target }) => {
    playerRef.current = target;
  };

  // on mouse enter, needs to start autoplaying
  // on mouse leave, needs to stop autoplaying
  const handleStartPlaying = () => {
    if (playerRef.current) {
      playerRef.current.playVideo();
    }
  };

  const handleStopPlaying = () => {
    if (playerRef.current) {
      playerRef.current.pauseVideo();
    }
  };

  // video options
  const options = {
    playerVars: {
      autoplay: 0,
      controls: 1,
      mute: 1,
    },
  };

  return (
    <div className="video_block" onMouseEnter={handleStartPlaying} onMouseLeave={handleStopPlaying}>
      <YouTube opts={options} videoId={video_id} onReady={handleReady}/>
      <p>{video_title}</p>
    </div>
  );
}

Video.propTypes = {
  video_id: PropTypes.string.isRequired,
  video_title: PropTypes.string.isRequired,
};
