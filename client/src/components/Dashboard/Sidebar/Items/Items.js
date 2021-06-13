import { useSelector } from 'react-redux';
//Components
import Item from './Item/Item';
import Loading from '../../../Loading/Loading';
import Error from '../../../Error/Error';
const Items = () => {
  const isLoading = useSelector((state) => state.items.isLoading);
  const isError = useSelector((state) => state.items.isError);
  const items = useSelector((state) => state.items.items);

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
        <Item key={item._id} item={item} />
      ))}
    </ul>
  );
};

export default Items;
