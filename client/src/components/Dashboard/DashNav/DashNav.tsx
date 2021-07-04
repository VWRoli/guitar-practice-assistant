import { FaSignOutAlt, FaUserEdit } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ActionType } from '../../../constants/actionTypes';
import { logout } from '../../../actions/auth';

type Props = {
  editProfile: boolean;
  setEditProfile: React.Dispatch<React.SetStateAction<boolean>>;
};

const DashNav: React.FC<Props> = ({
  setEditProfile,
  editProfile,
}): JSX.Element => {
  const user = JSON.parse(localStorage.getItem('guitar-pa-profile') || '{}');

  const history = useHistory();
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logout());
    history.push('/');
  };

  return (
    <nav className="dash-nav">
      <div>
        Logged in as, <span className="username">{user?.user.username}</span>
      </div>
      <div className="dash-controls">
        <FaUserEdit onClick={() => setEditProfile(!editProfile)} />
        <FaSignOutAlt onClick={logoutUser} />
      </div>
    </nav>
  );
};

export default DashNav;
