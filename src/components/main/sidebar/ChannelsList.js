import { useDispatch } from 'react-redux';
import '../../../css/sideBar/ChannelsList.css';
import { setChannelInfo } from '../../../features/appSlice';

const ChannelsList = ({ id, channelListName }) => {
  const dispatch = useDispatch();

  const changeChannelList = () => {
    dispatch(
      setChannelInfo({
        channelListId: id,
        channelListName: channelListName,
      })
    );
  };

  return (
    <div className='sidebar__channelsList' onClick={changeChannelList}>
      <div className='sidebar__channels'>
        <h4>
          <span className='sidebar__channelList__hash'>#</span>
          {channelListName}
        </h4>
      </div>
    </div>
  );
};
export default ChannelsList;
