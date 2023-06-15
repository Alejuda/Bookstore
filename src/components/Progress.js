import PropTypes from 'prop-types';
import progresSvg from '../assets/progress.svg';

function Progress({ progress }) {
  return (
    <div className="progress-container">
      <img className="progress-img" src={progresSvg} alt="progress" />
      <div className="progress-text">
        <p className="percent">{progress}</p>
        <p className="completed">Completed</p>
      </div>
    </div>
  );
}

export default Progress;

Progress.propTypes = {
  progress: PropTypes.string.isRequired,
};
