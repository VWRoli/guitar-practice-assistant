import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getItems } from '../../actions/items';
import { getProfile } from '../../actions/user';
import { State } from '../../reducers';
//Components
import MainContent from './MainContent/MainContent';
import Sidebar from './Sidebar/Sidebar';
import DashNav from './DashNav/DashNav';

const Dashboard = (): JSX.Element => {
  const [editProfile, setEditProfile] = useState(false);
  const dispatch = useDispatch();
  const currentId = useSelector((state: State) => state.items.currentId);

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
