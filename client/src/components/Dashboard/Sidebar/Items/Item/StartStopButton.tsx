import { FaRegPlayCircle, FaRegPauseCircle } from 'react-icons/fa';

type Props = {
  isPlay: boolean;
  clickHandler: () => void;
};

const StartStopButton: React.FC<Props> = ({
  clickHandler,
  isPlay,
}): JSX.Element => {
  return (
    <button className="play-btn" onClick={clickHandler}>
      {isPlay ? <FaRegPlayCircle /> : <FaRegPauseCircle />}
    </button>
  );
};

export default StartStopButton;
