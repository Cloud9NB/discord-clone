import '../../../css/chat/ChatHeader.css';
import ChatHeaderRight from './ChatHeaderRight';
import { useSelector } from 'react-redux';
import { selectChannelListName } from '../../../features/appSlice';

const ChatHeader = () => {
  const channelListName = useSelector(selectChannelListName);

  return (
    <div className='chatHeader'>
      <div className='chatHeader__left'>
        <h3>
          <span className='chatHeader__hash'>#</span>
          {channelListName}
        </h3>
      </div>

      <ChatHeaderRight />
    </div>
  );
};

export default ChatHeader;
