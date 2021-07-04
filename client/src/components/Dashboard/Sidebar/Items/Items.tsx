import { useSelector } from 'react-redux';
//Components
import Item from './Item/Item';
import Loading from '../../../Loading/Loading';
import Error from '../../../Error/Error';
import { State } from '../../../../reducers';

type Props = {
  clear: () => void;
};
const Items: React.FC<Props> = ({ clear }) => {
  const isLoading = useSelector((state: State) => state.items.isLoading);
  const isError = useSelector((state: State) => state.items.isError);
  const items = useSelector((state: State) => state.items.items);

  //Loading screen
  if (isLoading) {
    return <Loading />;
  }

  //Error screen
  if (isError) {
    return <Error />;
  }
  //No practice items
  if (!items.length) {
    return (
      <p className="empty-items-text">You don't have any practice items yet.</p>
    );
  }
  return (
    <ul>
      {items.map((item) => (
        <Item key={item._id} item={item} clear={clear} />
      ))}
    </ul>
  );
};

export default Items;
