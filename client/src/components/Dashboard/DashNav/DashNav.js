import { useState, useEffect } from 'react';
import { FaSignOutAlt, FaUserEdit } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { LOGOUT } from '../../../constants/actionTypes';
import decode from 'jwt-decode';

const DashNav = () => {
  const user = useSelector((state) => state.auth.authData);
  const history = useHistory();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({ type: LOGOUT });
    history.push('/');
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
  }, [user?.token]);

  return (
    <nav className="dash-nav">
      <div>
        Logged in as, <span className="username">{user?.result.username}</span>
      </div>
      <div className="dash-controls">
        <FaUserEdit />
        <FaSignOutAlt onClick={logout} />
      </div>
    </nav>
  );
};

export default DashNav;
