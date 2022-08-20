import '../../../css/chat/Chat.css';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';

const Chat = () => {
  return (
    <div className='chat'>
      <ChatHeader />

      <div className='chat__messages'>
        <ChatMessages />
        <ChatMessages />
        <ChatMessages />
      </div>

      <ChatInput />
    </div>
  );
};

export default Chat;
