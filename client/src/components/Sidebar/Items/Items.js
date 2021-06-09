import { useSelector } from 'react-redux';
import Item from './Item/Item';

const Items = () => {
  const items = useSelector((state) => state.items);
  return (
    <ul>
      {items.map((item) => (
        <Item key={item._id} item={item} />
      ))}
    </ul>
  );
};

export default Items;
