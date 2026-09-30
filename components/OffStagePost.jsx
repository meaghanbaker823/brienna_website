import { useState } from 'react';
import PropTypes from 'prop-types'; // 1. Import the PropTypes library
import ImageList from './ImageList';

export default function OffStagePost({ name, location, title_img, hidden_text, imgs }) {
  const [hidden, setHidden] = useState('hidden');

  const showButtonId = `hidden-${name}-b`;
  const hiddenClassId = `hidden-${name}-c`;
  const hideButtonId = `hidden-${name}-a`;

  if (hidden === 'show') {
    // if title img passed, show img
    return (
      <div className="entire_stage_post">
        <div className="stage_post">
          {!title_img && (
            <div className="stage_text" style={{ width: '100%' }}>
              <h1>{name}</h1>
              <h4>{location}</h4>
            </div>
          )}
          {title_img && (
            <div className="stage_text" style={{ width: '100%' }}>
              <h1>{name}</h1>
              <h4>{location}</h4>
            </div>
          )}
          {title_img && <img alt="A photo" src={`/images/${title_img}`} />}
        </div>
        <div className="hidden" id={hiddenClassId}>
          <p className="hidden-text">{hidden_text}</p>
          {title_img && <ImageList className="hidden-imgs" imgs={imgs} />}
          <a
            href={`#${showButtonId}`}
            id={hideButtonId}
            type="button"
            onClick={() => setHidden('hide')}
          >
            View less
          </a>
        </div>
      </div>
    );
  }

  // if hidden
  // if no title img, need different button styling
  return (
    <div className="entire_stage_post">
      <div className="stage_post">
        {title_img && (
          <div className="stage_text">
            <h1>{name}</h1>
            <h4>{location}</h4>
            <button id={showButtonId} type="button" onClick={() => setHidden('show')}>
              View more
            </button>
          </div>
        )}
        {!title_img && (
          <div className="stage_text" style={{ width: '100%' }}>
            <h1>{name}</h1>
            <h4>{location}</h4>
            <button
              id={showButtonId}
              style={{ alignSelf: 'center' }}
              type="button"
              onClick={() => setHidden('show')}
            >
              View more
            </button>
          </div>
        )}
        {title_img && <img alt="A photo" src={`/images/${title_img}`} />}
      </div>
    </div>
  );
}

// 2. Define the expected types for each prop
OffStagePost.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  title_img: PropTypes.string,
  hidden_text: PropTypes.string.isRequired,
  imgs: PropTypes.arrayOf(PropTypes.string).isRequired,
};
