import {
  FaDumbbell,
  FaRegClock,
  FaMusic,
  FaTimes,
  FaRegPlayCircle,
} from 'react-icons/fa';

const Item = ({ item }) => {
  return (
    <li className="practice-item">
      <FaTimes className="close-item" />
      <h2 className="practice-item-title">{item.title}</h2>
      <div className="practice-item-details">
        <span>
          Type:
          {item.type === 'song' ? (
            <FaMusic style={{ color: '#ffb003' }} />
          ) : (
            <FaDumbbell style={{ color: '#4285f4' }} />
          )}
        </span>
        <span>
          Time: <span className="practice-item-time-value">00:00</span>
          <FaRegClock style={{ color: '#9be15d' }} />
        </span>
      </div>

      <button className="play-btn">
        <FaRegPlayCircle />
      </button>
    </li>
  );
};

export default Item;
