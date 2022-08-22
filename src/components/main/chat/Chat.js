import { useEffect, useState } from 'react';
import '../../../css/chat/Chat.css';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';
import db from '../../../firebase/firebase';
import { useSelector } from 'react-redux';
import { selectChannelListId } from '../../../features/appSlice';

const Chat = () => {
  const [state, setState] = useState({
    messages: [],
    input: '',
  });

  const channelListId = useSelector(selectChannelListId);

  const messageList = state.messages.map(message => (
    <ChatMessages
      message={message.messages}
      timestamp={message.timestamp}
      user={message.user}
    />
  ));

  useEffect(() => {
    if (channelListId) {
      db.collection('channels')
        .doc(channelListId)
        .collection('messages')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot =>
          setState(prev => ({
            ...prev,
            messages: snapshot.docs.map(doc => doc.data()),
          }))
        );
    }
  }, [channelListId]);

  return (
    <div className='chat'>
      <ChatHeader />

      <div className='chat__messages'>{messageList}</div>

      <ChatInput setState={setState} input={state.input} />
    </div>
  );
};

export default Chat;
