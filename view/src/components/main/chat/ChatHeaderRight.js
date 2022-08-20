import '../../../css/chat/ChatHeaderRight.css';
import NumbersIcon from '@mui/icons-material/Numbers';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PushPinIcon from '@mui/icons-material/PushPin';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import InboxIcon from '@mui/icons-material/Inbox';
import HelpIcon from '@mui/icons-material/Help';
import SearchIcon from '@mui/icons-material/Search';

const ChatHeaderRight = () => {
  return (
    <div className='chatHeader__right'>
      <NumbersIcon />
      <NotificationsIcon />
      <PushPinIcon />
      <PeopleAltIcon />

      <div className='chatHeader__search'>
        <input type='text' placeholder='Search' />
        <SearchIcon />
      </div>

      <InboxIcon />
      <HelpIcon />
    </div>
  );
};
export default ChatHeaderRight;
