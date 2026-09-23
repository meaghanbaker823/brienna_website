import { useState } from 'react';
import PropTypes from 'prop-types'; // 1. Import the PropTypes library
import ImageList from './ImageList';

export default function BlogPost({ name, role, title, img, hidden_text, imgs }) {
  const [hidden, setHidden] = useState('hidden');

  const showButtonId = `hidden-${name}-b`;
  const hiddenClassId = `hidden-${name}-c`;
  const hideButtonId = `hidden-${name}-a`;

  if (hidden === 'show') {
    return (
      <div className="entire_stage_post">
        <div className="stage_post">
          <div className="stage_text">
            <h1>{name}</h1>
            <h4>Played: {role}</h4>
          </div>
          <img alt="A Photo" src={`/images/${title}-${img}`} />
        </div>
        <div id={hiddenClassId}>
          <p className="hidden-text">{hidden_text}</p>
          <ImageList className="hidden-imgs" imgs={imgs} />
          <button id={hideButtonId} type="button" onClick={() => setHidden('hide')}>
            View less
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="entire_stage_post">
      <div className="stage_post">
        <div className="stage_text">
          <h1>{name}</h1>
          <h4>Played: {role}</h4>
          <button id={showButtonId} type="button" onClick={() => setHidden('show')}>
            View more
          </button>
        </div>
        <img alt="A photo" src={`/images/${title}-${img}`} />
      </div>
    </div>
  );
}

// 2. Define the expected types for each prop
BlogPost.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  hidden_text: PropTypes.string.isRequired,
  imgs: PropTypes.arrayOf(PropTypes.string).isRequired,
};
