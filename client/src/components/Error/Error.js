import { FaExclamationTriangle } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Error = () => {
  const msg = useSelector((state) => state.items.errorMsg);
  return (
    <div className="error-container">
      <FaExclamationTriangle className="error-sign" />
      <p>{msg}</p>
    </div>
  );
};

export default Error;
