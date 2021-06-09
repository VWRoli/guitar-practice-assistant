import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const AddNewItem = () => {
  const [visible, setVisible] = useState(true);
  return (
    <form className="practice-item new-practice-item">
      <div className={visible ? 'form-group' : 'form-group hidden'}>
        <div className="title-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Song, excercise, chord..."
            required
          />
        </div>

        <div>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            name="duration"
            placeholder="Min"
            min="0"
            max="99"
            required
          />
        </div>

        <div>
          <label htmlFor="type">Type</label>
          <select name="type">
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
