import '../css/App.css';
import Chat from './main/chat/Chat';
import Sidebar from './main/sidebar/Sidebar';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';

const App = () => {
  const user = useSelector(selectUser);

  return (
    <div className='App'>
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <h1>Please Login</h1>
      )}
    </div>
  );
};

export default App;
