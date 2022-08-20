import { Avatar } from '@mui/material';
import '../../../css/chat/ChatMessages.css';

const ChatMessages = () => {
  return (
    <div className='chatMessages'>
      <Avatar />
      <div className='chatMessages__info'>
        <h4>
          Cloud9NB
          <span className='chatMessages__timestamp'>Today at 10:50 PM</span>
          <p>Messages here</p>
        </h4>
      </div>
    </div>
  );
};

export default ChatMessages;
