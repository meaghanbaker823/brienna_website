import PropTypes from 'prop-types';

export default function ImageList({ imgs, className = '' }) {
  return (
    <div className={className}>
      {imgs.map((img) => (
        <img key={img} alt={`Stage moment ${img.split('.')[0]}`} src={`/images/${img}`} />
      ))}
    </div>
  );
}

ImageList.propTypes = {
  // Validates that 'imgs' is an array of strings, and is required
  imgs: PropTypes.arrayOf(PropTypes.string).isRequired,
  // Validates that 'className' is a string, but is optional
  className: PropTypes.string,
};
