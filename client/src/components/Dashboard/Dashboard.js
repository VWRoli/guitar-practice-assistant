import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
//Components
import MainContent from './MainContent/MainContent';
import Sidebar from './Sidebar/Sidebar';

import { getItems } from '../../actions/items';

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);
  return (
    <div className="dash-container">
      <main className="container">
        <Sidebar />
        <MainContent />
      </main>
    </div>
  );
};

export default Dashboard;
