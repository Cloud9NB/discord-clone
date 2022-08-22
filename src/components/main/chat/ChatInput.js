import '../../../css/chat/ChatInput.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifBoxIcon from '@mui/icons-material/GifBox';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useSelector } from 'react-redux';
import {
  selectChannelListId,
  selectChannelListName,
} from '../../../features/appSlice';
import db from '../../../firebase/firebase';
import { selectUser } from '../../../features/userSlice';
import firebase from 'firebase/compat/app';

const ChatInput = ({ setState, input }) => {
  const channelListId = useSelector(selectChannelListId);
  const channelListName = useSelector(selectChannelListName);
  const user = useSelector(selectUser);
  let chatPlaceholder = `Message #${channelListName}`;

  const channelPlaceholder = () => {
    if (!channelListName) {
      chatPlaceholder = 'Please choose a channel to message';
    }
  };

  channelPlaceholder();

  const onChange = event => {
    setState(prev => ({ ...prev, input: event.target.value }));
  };

  const onClick = event => {
    event.preventDefault();
    db.collection('channels').doc(channelListId).collection('messages').add({
      messages: input,
      user,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setState(prev => ({ ...prev, input: '' }));
  };

  return (
    <div className='chat__input'>
      <AddCircleIcon fontSize='large' />

      <form action=''>
        <input
          value={input}
          onChange={onChange}
          disabled={!channelListId}
          type='text'
          name=''
          id=''
          placeholder={chatPlaceholder}
        />
        <button
          className='chat__inputButton'
          type='submit'
          disabled={!channelListId}
          onClick={onClick}
        >
          Hidden Button
        </button>
      </form>

      <div className='chat__inputIcons'>
        <CardGiftcardIcon fontSize='large' />
        <GifBoxIcon fontSize='large' />
        <EmojiEmotionsIcon fontSize='large' />
      </div>
    </div>
  );
};

export default ChatInput;
