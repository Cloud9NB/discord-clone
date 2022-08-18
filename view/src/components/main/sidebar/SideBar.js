import '../../../css/sideBar/Sidebar.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <h3>March LHL Cohort</h3>
        <ExpandMoreIcon />
      </div>
    </div>
  );
};

export default Sidebar;
