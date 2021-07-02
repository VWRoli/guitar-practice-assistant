import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//Components
import MainContent from './MainContent/MainContent';
import Sidebar from './Sidebar/Sidebar';
import DashNav from './DashNav/DashNav';

import { getItems } from '../../actions/items';
import { getProfile } from '../../actions/user';

const Dashboard = () => {
  const [editProfile, setEditProfile] = useState(false);
  const dispatch = useDispatch();
  const currentId = useSelector((state) => state.items.currentId);

  useEffect(() => {
    dispatch(getItems());
    dispatch(getProfile());
  }, [currentId, dispatch]);

  return (
    <div className="dash-container">
      <main className="container">
        <DashNav setEditProfile={setEditProfile} editProfile={editProfile} />
        <Sidebar />
        <MainContent
          editProfile={editProfile}
          setEditProfile={setEditProfile}
        />
      </main>
    </div>
  );
};

export default Dashboard;
