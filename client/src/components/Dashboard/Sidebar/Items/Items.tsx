import { useSelector } from 'react-redux';
import { State } from '../../../../reducers';
//Components
import Item from './Item/Item';
import Loading from '../../../utils/Loading/Loading';
import Message from '../../../utils/Message/Message';

type Props = {
  clear: () => void;
};
const Items: React.FC<Props> = ({ clear }) => {
  const isLoading = useSelector((state: State) => state.items.isLoading);
  const errorMsg = useSelector((state: State) => state.items.errorMsg);
  const items = useSelector((state: State) => state.items.items);

  //Loading screen
  if (isLoading) return <Loading />;

  //Error screen
  if (errorMsg) return <Message msg={errorMsg} isError={true} />;

  return (
    <ul>
      {items.length ? (
        items.map((item) => <Item key={item._id} item={item} clear={clear} />)
      ) : (
        <p className="empty-items-text">
          You don't have any practice items yet.
        </p>
      )}
    </ul>
  );
};

export default Items;
