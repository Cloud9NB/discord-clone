import React from 'react';
import '../css/App.css';
import Chat from './main/chat/Chat';
import Sidebar from './main/sidebar/Sidebar';

const App = () => {
  return (
    <div className='App'>
      <Sidebar />
      <Chat />
    </div>
  );
};

export default App;
