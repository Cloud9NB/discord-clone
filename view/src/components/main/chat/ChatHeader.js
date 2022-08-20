import '../../../css/chat/ChatHeader.css';
import ChatHeaderRight from './ChatHeaderRight';

const ChatHeader = () => {
  return (
    <div className='chatHeader'>
      <div className='chatHeader__left'>
        <h3>
          <span className='chatHeader__hash'>#</span>
          Youtube
        </h3>
      </div>

      <ChatHeaderRight />
    </div>
  );
};

export default ChatHeader;
