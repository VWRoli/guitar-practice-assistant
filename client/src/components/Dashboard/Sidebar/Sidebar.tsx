import { useState } from 'react';
import { FaGuitar } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { setCurrentId } from '../../../actions/items';
import Logo from '../../utils/Logo/Logo';
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
  createdAt: Date;
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
    createdAt: new Date(),
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
      <Logo accentText={<FaGuitar />} postText="Practice Assistant" />
      <AddNewItem clear={clear} setItemData={setItemData} itemData={itemData} />
      <Items clear={clear} />
    </aside>
  );
};

export default Sidebar;
