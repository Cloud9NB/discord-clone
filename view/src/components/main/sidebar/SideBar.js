import '../../../css/sideBar/Sidebar.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Channels from './Channels';
import Voice from './Voice';
import Profile from './Profile';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <h3>
          GitHub{' '}
          <a
            className='sidebar__githubLink'
            href='https://github.com/Cloud9NB'
            target='_blank'
            rel='noopener noreferrer'
          >
            @Cloud9NB
          </a>
        </h3>
        <ExpandMoreIcon />
      </div>
      <Channels />
      <Voice />
      <Profile />
    </div>
  );
};

export default Sidebar;
