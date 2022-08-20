import '../../../css/chat/ChatInput.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifBoxIcon from '@mui/icons-material/GifBox';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const ChatInput = () => {
  const channelList = '#general-chat';
  const chatPlaceholder = `Message ${channelList}`;

  return (
    <div className='chat__input'>
      <AddCircleIcon fontSize='large' />

      <form action=''>
        <input type='text' name='' id='' placeholder={chatPlaceholder} />
        <button className='chat__inputButton' type='submit'>
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
