import '../../../css/chat/Chat.css';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';

const Chat = () => {
  return (
    <div className='chat'>
      <ChatHeader />
      <ChatInput />
    </div>
  );
};

export default Chat;
