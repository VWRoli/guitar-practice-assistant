import { FaTimes } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { removeError } from '../../actions/items';

const Error = () => {
  const msg = useSelector((state) => state.items.errorMsg);
  const dispatch = useDispatch();

  return (
    <>
      {msg && (
        <div className="error-container">
          <p>{msg}</p>
          <FaTimes id="close-msg" onClick={() => dispatch(removeError())} />
        </div>
      )}
    </>
  );
};

export default Error;
