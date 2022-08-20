import '../../../css/sideBar/Profile.css';
import { Avatar } from '@mui/material';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';

const Profile = () => {
  return (
    <div className='sidebar__profile'>
      <Avatar />
      <div className='sidebar__profileInfo'>
        <h3>@Cloud9NB</h3>
        <p>#4223</p>
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
