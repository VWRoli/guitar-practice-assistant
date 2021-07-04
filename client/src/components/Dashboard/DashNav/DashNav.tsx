import { FaSignOutAlt, FaUserEdit } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ActionType } from '../../../constants/actionTypes';
import { State } from '../../../reducers';

type Props = {
  editProfile: boolean;
  setEditProfile: React.Dispatch<React.SetStateAction<boolean>>;
};

const DashNav: React.FC<Props> = ({
  setEditProfile,
  editProfile,
}): JSX.Element => {
  const user = JSON.parse(localStorage.getItem('guitar-pa-profile') || '');

  const history = useHistory();
  const dispatch = useDispatch();

  //todo put this into the actions
  const logout = () => {
    dispatch({ type: ActionType.LOGOUT });
    history.push('/');
  };

  return (
    <nav className="dash-nav">
      <div>
        Logged in as, <span className="username">{user?.user.username}</span>
      </div>
      <div className="dash-controls">
        <FaUserEdit onClick={() => setEditProfile(!editProfile)} />
        <FaSignOutAlt onClick={logout} />
      </div>
    </nav>
  );
};

export default DashNav;
