import '../../../css/sideBar/Profile.css';
import { Avatar } from '@mui/material';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/userSlice';

const Profile = () => {
  const { photo, displayName, uid } = useSelector(selectUser);
  const NumberOnlyUid = uid.replace(/\D/g, '');

  return (
    <div className='sidebar__profile'>
      <Avatar src={photo} />
      <div className='sidebar__profileInfo'>
        <h3>@{displayName}</h3>
        <p>#{NumberOnlyUid}</p>
      </div>

      <div className='sidebar__profileIcons'>
        <KeyboardVoiceIcon />
        <HeadphonesIcon />
        <SettingsIcon />
      </div>
    </div>
  );
};

export default Profile;
