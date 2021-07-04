import { FaSpinner } from 'react-icons/fa';

const Loading = (): JSX.Element => {
  return (
    <div className="spinner-container">
      <FaSpinner className="spinner" />
    </div>
  );
};

export default Loading;
