import { useSelector } from 'react-redux';
import { State } from '../../../../reducers';
//Components
import Item from './Item/Item';
import Loading from '../../../utils/Loading/Loading';
import Message from '../../../utils/Message/Message';
import { ItemType } from '../Sidebar';

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

  const getTime = (date?: Date) => {
    return date != null ? new Date(date).getTime() : 0;
  };

  const sortByCreatedAt = (array: ItemType[]): ItemType[] => {
    return array.sort((a: ItemType, b: ItemType) => {
      return getTime(b.createdAt) - getTime(a.createdAt);
    });
  };
  const sortedItems = sortByCreatedAt(items);

  return (
    <ul>
      {sortedItems.length ? (
        sortedItems.map((item) => (
          <Item key={item._id} item={item} clear={clear} />
        ))
      ) : (
        <p className="empty-items-text">
          You don't have any practice items yet.
        </p>
      )}
    </ul>
  );
};

export default Items;
