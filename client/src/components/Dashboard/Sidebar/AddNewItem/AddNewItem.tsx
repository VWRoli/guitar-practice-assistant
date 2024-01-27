import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { createItem, updateItem } from "../../../../actions/items";
import { State } from "../../../../reducers";
import { ItemType } from "../Sidebar";

type Props = {
  clear: () => void;
  itemData: ItemType;
  setItemData: React.Dispatch<React.SetStateAction<ItemType>>;
};

const AddNewItem: React.FC<Props> = ({ clear, setItemData, itemData }) => {
  const [visible, setVisible] = useState(true);
  const currentId = useSelector((state: State) => state.items.currentId);

  const item = useSelector((state: State) =>
    currentId ? state.items.items.find((item) => item._id === currentId) : null
  );

  useEffect(() => {
    if (item) setItemData(item);
  }, [item, setItemData]);

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updateItem(currentId, itemData));
    } else {
      //after editing an item we have to remove the id otherwise we create a new item with the same id
      if (itemData._id) {
        delete itemData._id;
      }
      dispatch(createItem(itemData));
    }
    clear();
  };
  return (
    <form className='new-practice-item' onSubmit={handleSubmit}>
      <div className={visible ? "form-group" : "form-group hidden"}>
        <div className='title-group'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            value={itemData.title}
            placeholder='Song, excercise, chord...'
            required
            onChange={(e) =>
              setItemData({ ...itemData, title: e.target.value })
            }
          />
        </div>

        <div className='duration-group'>
          <label htmlFor='duration'>Duration</label>
          <input
            type='number'
            name='duration'
            value={itemData.duration}
            placeholder='Min'
            min='1'
            max='60'
            required
            onChange={(e) =>
              setItemData({ ...itemData, duration: parseInt(e.target.value) })
            }
          />
        </div>

        <div className='type-group'>
          <label htmlFor='type'>Type</label>
          <select
            name='type'
            value={itemData.type}
            onChange={(e) => setItemData({ ...itemData, type: e.target.value })}
          >
            <option value='excercise'>Excercise</option>
            <option value='song'>Song</option>
          </select>
        </div>

        <button type='submit' id='add-new-item-btn'>
          {currentId ? "Edit" : "Add"}
        </button>
      </div>

      <div className='slide-btn' onClick={() => setVisible(!visible)}>
        {visible ? <FaChevronUp /> : <FaChevronDown />}
      </div>
    </form>
  );
};

export default AddNewItem;
