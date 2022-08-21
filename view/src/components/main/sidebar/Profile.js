import '../../../css/sideBar/Profile.css';
import { Avatar } from '@mui/material';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/userSlice';
import { auth } from '../../../firebase/firebase';

const Profile = () => {
  const { photo, displayName, uid } = useSelector(selectUser);
  const NumberOnlyUid = uid.replace(/\D/g, '');

  const signOut = () => {
    auth.signOut();
  };

  return (
    <div className='sidebar__profile'>
      <div className='sidebar__profileData'>
        <Avatar src={photo} onClick={signOut} />
        <div className='sidebar__profileInfo'>
          <h3>@{displayName}</h3>
          <p>#{NumberOnlyUid}</p>
        </div>
      </div>
      {/* <div className='sidebar__logout'>Logout</div> */}

      <div className='sidebar__profileIcons'>
        <KeyboardVoiceIcon />
        <HeadphonesIcon />
        <SettingsIcon />
      </div>
    </div>
  );
};

export default Profile;
