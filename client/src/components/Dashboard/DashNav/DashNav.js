import { FaSignOutAlt, FaUserEdit } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { LOGOUT } from '../../../constants/actionTypes';

const DashNav = ({ setEditProfile, editProfile }) => {
  const user = useSelector((state) => state.auth.authData);
  const history = useHistory();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({ type: LOGOUT });
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
