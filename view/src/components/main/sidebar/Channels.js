import '../../../css/sideBar/Channels.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChannelsList from './ChannelsList';

const Channels = () => {
  return (
    <div className='sidebar__channels'>
      <div className='sidebar__channelsHeader'>
        <div className='sidebar__header'>
          <ExpandMoreIcon className='sidebar__expandChannel' />
          <h4>./INFORMATION</h4>
        </div>
      </div>

      <div className='sidebar__channelsList'>
        <ChannelsList />
        <ChannelsList />
        <ChannelsList />
        <ChannelsList />
      </div>
    </div>
  );
};

export default Channels;
