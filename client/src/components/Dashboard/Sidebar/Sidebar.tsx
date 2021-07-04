import { useState } from 'react';
import { FaGuitar } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { setCurrentId } from '../../../actions/items';
//Components
import AddNewItem from './AddNewItem/AddNewItem';
import Items from './Items/Items';

export type ItemType = {
  _id?: string;
  title: string;
  duration: number;
  type: string;
  userId: string;
  isDisabled: boolean;
};

const Sidebar = () => {
  const user = JSON.parse(localStorage.getItem('guitar-pa-profile') || '{}');

  const dispatch = useDispatch();
  const [itemData, setItemData] = useState<ItemType>({
    title: '',
    duration: 0,
    type: 'excercise',
    userId: user?.user._id,
    isDisabled: false,
  });

  const clear = (): void => {
    dispatch(setCurrentId(undefined));
    setItemData({
      ...itemData,
      title: '',
      duration: 0,
      type: 'excercise',
      isDisabled: false,
    });
  };
  return (
    <aside>
      <h1 className="logo">
        <span className="accent-clr">
          <FaGuitar />
        </span>
        Practice Assistant
      </h1>

      <AddNewItem clear={clear} setItemData={setItemData} itemData={itemData} />
      <Items clear={clear} />
    </aside>
  );
};

export default Sidebar;