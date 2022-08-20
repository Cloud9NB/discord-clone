import '../../../css/sideBar/Voice.css';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import CallEndIcon from '@mui/icons-material/CallEnd';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';

const Voice = () => {
  return (
    <div className='sidebar__voice'>
      <SignalCellularAltIcon className='sidebar__voiceIcon' fontSize='large' />

      <div className='sidebar__voiceInfo'>
        <h3>Voice Connected</h3>
        <p>Stream</p>
      </div>

      <div className='sidebar_voiceIcons'>
        <GraphicEqIcon />
        <CallEndIcon />
      </div>
    </div>
  );
};
export default Voice;
