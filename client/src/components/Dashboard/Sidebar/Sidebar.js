import { useState } from 'react';
import { FaGuitar } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { setCurrentId } from '../../../actions/items';
//Components
import AddNewItem from './AddNewItem/AddNewItem';
import Items from './Items/Items';

const Sidebar = () => {
  const user = JSON.parse(localStorage.getItem('guitar-pa-profile'));

  const dispatch = useDispatch();
  const [itemData, setItemData] = useState({
    title: '',
    duration: '',
    type: 'excercise',
    userId: user?.user._id,
    isDisabled: false,
  });

  const clear = () => {
    dispatch(setCurrentId(null));
    setItemData({
      ...itemData,
      title: '',
      duration: '',
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
