import { useDispatch } from 'react-redux';
import {
  FaDumbbell,
  FaRegClock,
  FaMusic,
  FaTimes,
  FaRegPlayCircle,
  FaRegPauseCircle,
  FaRedoAlt,
  FaEdit,
} from 'react-icons/fa';
import { deleteItem, setCurrentId } from '../../../../../actions/items';
import useTimer from '../../../../../hooks/useTimer';
import { formatTime } from '../../../../../utils/helpers';

const Item = ({ item, clear }) => {
  const dispatch = useDispatch();
  const {
    timeLeft,
    timerActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
    disableItem,
  } = useTimer(item.duration * 60);

  const handleDelete = () => {
    dispatch(deleteItem(item._id));
    clear();
  };

  return (
    <li
      className="practice-item"
      style={{
        borderLeft:
          item.type === 'song' ? '5px solid #ffb003' : ' 5px solid #4285f4',
      }}>
      {disableItem ? (
        <div className="reset-btn-wrapper">
          <button className="reset-btn" onClick={handleReset}>
            <FaRedoAlt />
          </button>
        </div>
      ) : null}
      <div
        className={
          disableItem
            ? 'practice-item-wrapper disable-item'
            : 'practice-item-wrapper'
        }>
        <div className="item-controls">
          <FaEdit
            className="edit-item"
            onClick={() => dispatch(setCurrentId(item._id))}
          />
          <FaTimes className="close-item" onClick={handleDelete} />
        </div>
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
            Time:{' '}
            <span className="practice-item-time-value">
              {formatTime(timeLeft)}
            </span>
            <FaRegClock style={{ color: '#9be15d' }} />
          </span>
        </div>

        {!timerActive && !isPaused ? (
          <button className="play-btn" onClick={handleStart}>
            <FaRegPlayCircle />
          </button>
        ) : isPaused ? (
          <button className="play-btn" onClick={handlePause}>
            <FaRegPauseCircle />
          </button>
        ) : (
          <button className="play-btn" onClick={handleResume}>
            <FaRegPlayCircle />
          </button>
        )}
      </div>
    </li>
  );
};

export default Item;
