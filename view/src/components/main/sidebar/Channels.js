import '../../../css/sideBar/Channels.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChannelsList from './ChannelsList';
import { useEffect, useState } from 'react';
import db from '../../../firebase/firebase';
import AddIcon from '@mui/icons-material/Add';

const Channels = () => {
  const [channelsList, setChannelsList] = useState([]);

  useEffect(() => {
    db.collection('channels').onSnapshot(snapshot =>
      setChannelsList(
        snapshot.docs.map(doc => ({
          id: doc.id,
          channel: doc.data(),
        }))
      )
    );
  }, []);

  const addChannelList = () => {
    const channelListName = prompt('Enter a new channel name');

    if (channelListName) {
      db.collection('channels').add({ channelListName });
    }
  };

  const allChannelList = channelsList.map(({ id, channel }) => (
    <ChannelsList key={id} id={id} channelListName={channel.channelListName} />
  ));

  return (
    <div className='sidebar__channels'>
      <div className='sidebar__channelsHeader'>
        <div className='sidebar__header'>
          <ExpandMoreIcon className='sidebar__expandChannel' />
          <h4>./INFORMATION</h4>
        </div>
        <AddIcon className='sidebar__addChannel' onClick={addChannelList} />
      </div>

      <div className='sidebar__channelsList'>{allChannelList}</div>
    </div>
  );
};

export default Channels;
