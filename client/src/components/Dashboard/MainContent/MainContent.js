import UserMetronome from './UserMetronome/UserMetronome';
import UserProfile from './UserProfile/UserProfile';

const MainContent = ({ editProfile, setEditProfile }) => {
  return (
    <>
      {editProfile ? (
        <UserProfile setEditProfile={setEditProfile} />
      ) : (
        <UserMetronome />
      )}
    </>
  );
};

export default MainContent;
