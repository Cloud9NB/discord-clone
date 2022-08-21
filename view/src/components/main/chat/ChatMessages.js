import { Avatar } from '@mui/material';
import '../../../css/chat/ChatMessages.css';

const ChatMessages = ({ message, timestamp, user }) => {
  const convertedTime = new Date(timestamp?.toDate()).toUTCString();
  return (
    <div className='chatMessages'>
      <Avatar src={user.photo} />
      <div className='chatMessages__info'>
        <h4>
          {user.displayName}
          <span className='chatMessages__timestamp'>{convertedTime}</span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ChatMessages;
