import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from '../../../../actions/user';
import { ActionType } from '../../../../constants/actionTypes';
import { FaTimes } from 'react-icons/fa';
import { State } from '../../../../reducers';
import Button from '../../../utils/Button';

type Props = {
  setEditProfile: React.Dispatch<React.SetStateAction<boolean>>;
};
export type UpdateProfileFormData = {
  username: string;
  email: string;
};

const UserProfile: React.FC<Props> = ({ setEditProfile }): JSX.Element => {
  const user = useSelector((state: State) => state.user.user);
  const msg = useSelector((state: State) => state.user.message);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState<UpdateProfileFormData>({
    username: user.username,
    email: user.email,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const deleteUserMsg = () => {
    setTimeout(() => {
      setEditProfile(false);
      dispatch({ type: ActionType.UPDATE_USER_MSG, payload: '' });
    }, 3000);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateProfile(formData));
    deleteUserMsg();
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
        <Button text="Submit" link={false} />
      </form>
    </section>
  );
};

export default UserProfile;
