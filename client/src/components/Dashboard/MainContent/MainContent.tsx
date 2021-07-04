import UserMetronome from './UserMetronome/UserMetronome';
import UserProfile from './UserProfile/UserProfile';

type Props = {
  editProfile: boolean;
  setEditProfile: React.Dispatch<React.SetStateAction<boolean>>;
};

const MainContent: React.FC<Props> = ({
  editProfile,
  setEditProfile,
}): JSX.Element => {
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
