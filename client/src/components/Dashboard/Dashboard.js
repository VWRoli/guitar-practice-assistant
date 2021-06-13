import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//Components
import MainContent from './MainContent/MainContent';
import Sidebar from './Sidebar/Sidebar';
import DashNav from './DashNav/DashNav';

import { getItems } from '../../actions/items';

const Dashboard = () => {
  const dispatch = useDispatch();
  const currentId = useSelector((state) => state.items.currentId);

  useEffect(() => {
    dispatch(getItems());
  }, [currentId, dispatch]);

  return (
    <div className="dash-container">
      <main className="container">
        <DashNav />
        <Sidebar />
        <MainContent />
      </main>
    </div>
  );
};

export default Dashboard;
