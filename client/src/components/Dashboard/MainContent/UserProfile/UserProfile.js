import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile, deleteProfile } from '../../../../actions/user';
import { LOGOUT, UPDATE_USER_MSG } from '../../../../constants/actionTypes';
import { FaTimes } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

const UserProfile = ({ setEditProfile }) => {
  const user = useSelector((state) => state.user.user);
  const msg = useSelector((state) => state.user.message);
  const dispatch = useDispatch();
  const history = useHistory();

  const [formData, setFormData] = useState({
    username: user.username,
    email: user.email,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const deleteUserMsg = () => {
    setTimeout(() => {
      setEditProfile(false);
      dispatch({ type: UPDATE_USER_MSG, payload: '' });
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(formData));
    deleteUserMsg();
  };

  const deleteUserProfile = () => {
    dispatch(deleteProfile());
    dispatch({ type: LOGOUT });
    history.push('/');
  };

  return (
    <section className="user-profile">
      <h1>Edit Profile</h1>
      <FaTimes
        className="close-edit-profile"
        onClick={() => setEditProfile(false)}
      />
      <form onSubmit={handleSubmit}>
        <div className="auth__form-group">
          <label htmlFor="username"></label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            defaultValue={user.username}
            onChange={handleChange}
          />
        </div>
        <div className="auth__form-group">
          <label htmlFor="email"></label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            defaultValue={user.email}
            onChange={handleChange}
          />
        </div>
        {msg && (
          <div className="profile-update-success">
            <p>{msg}</p>
          </div>
        )}
        <button type="submit" className="primary-btn">
          Submit
        </button>
        <button className="secondary-btn" onClick={deleteUserProfile}>
          Delete Profile
        </button>
      </form>
    </section>
  );
};

export default UserProfile;
