import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { createItem } from '../../../../actions/items';

const AddNewItem = () => {
  const [visible, setVisible] = useState(true);
  const user = JSON.parse(localStorage.getItem('guitar-pa-profile'));

  const [itemData, setItemData] = useState({
    title: '',
    duration: 5,
    type: 'excercise',
    userId: user?.result._id,
    isDisabled: false,
  });

  const clear = () => {
    setItemData({
      ...itemData,
      title: '',
      duration: 5,
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createItem(itemData));
    clear();
  };
  return (
    <form className="new-practice-item" onSubmit={handleSubmit}>
      <div className={visible ? 'form-group' : 'form-group hidden'}>
        <div className="title-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={itemData.title}
            placeholder="Song, excercise, chord..."
            required
            onChange={(e) =>
              setItemData({ ...itemData, title: e.target.value })
            }
          />
        </div>

        <div className="duration-group">
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            name="duration"
            value={itemData.duration}
            placeholder="Min"
            min="0"
            max="99"
            required
            onChange={(e) =>
              setItemData({ ...itemData, duration: e.target.value })
            }
          />
        </div>

        <div className="type-group">
          <label htmlFor="type">Type</label>
          <select
            name="type"
            onChange={(e) =>
              setItemData({ ...itemData, type: e.target.value })
            }>
            <option value="excercise">Excercise</option>
            <option value="song">Song</option>
          </select>
        </div>

        <button type="submit" id="add-new-item-btn">
          Add
        </button>
      </div>

      <div className="slide-btn" onClick={() => setVisible(!visible)}>
        {visible ? <FaChevronUp /> : <FaChevronDown />}
      </div>
    </form>
  );
};

export default AddNewItem;
