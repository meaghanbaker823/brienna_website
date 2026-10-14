import PropTypes from 'prop-types'; // 1. Import the PropTypes library

export default function AboutMe({ alternate, img_src, paragraph }) {
  return (
    <section className="about_me">
      <img
        alt={alternate}
        className="about_me_item"
        src={`/images/${img_src}`}
        style={{ width: '45%' }}
      />
      <p className="about_me_item" style={{ textAlign: 'center', fontSize: 'large' }}>
        {paragraph}
      </p>
    </section>
  );
}

AboutMe.propTypes = {
  alternate: PropTypes.string.isRequired,
  img_src: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};
