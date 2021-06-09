import { FaGuitar } from 'react-icons/fa';
//Components
import AddNewItem from './AddNewItem/AddNewItem';

const Sidebar = () => {
  return (
    <aside>
      <h1 className="logo">
        <span className="accent-clr">
          <FaGuitar />
        </span>
        Practice Assistant
      </h1>

      <AddNewItem />
    </aside>
  );
};

export default Sidebar;
