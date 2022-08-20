import '../../../css/sideBar/Sidebar.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Channels from './Channels';
import Voice from './Voice';
import Profile from './Profile';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <h3>March 2022 Cohort</h3>
        <ExpandMoreIcon />
      </div>

      <Channels />
      <Channels />
      <Channels />
      <Channels />

      <Voice />

      <Profile />
    </div>
  );
};

export default Sidebar;
