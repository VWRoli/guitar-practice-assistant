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
    <main className="container">
      <Sidebar />
      <MainContent />
    </main>
  );
};

export default Dashboard;
