import { FaTimes } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { removeError } from '../../../actions/items';

type Props = {
  msg: string;
  isError: boolean;
};

const Error: React.FC<Props> = ({ msg, isError }): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <div className={isError ? 'msg-container error' : 'msg-container success'}>
      <p>{msg}</p>
      {isError && (
        <FaTimes id="close-msg" onClick={() => dispatch(removeError())} />
      )}
    </div>
  );
};

export default Error;
