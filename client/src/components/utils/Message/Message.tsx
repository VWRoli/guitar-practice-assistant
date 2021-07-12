import { FaTimes } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { removeError } from '../../../actions/items';

export enum msgType {
  PRIMARY = 'PRIMARY',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
}

type Props = {
  msg: string;
  msgRole: msgType;
};

const Error: React.FC<Props> = ({ msg, msgRole }): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <div className={`msg-container ${msgRole}`}>
      <p>{msg}</p>
      {msgRole === msgType.ERROR && (
        <FaTimes id="close-msg" onClick={() => dispatch(removeError())} />
      )}
    </div>
  );
};

export default Error;
