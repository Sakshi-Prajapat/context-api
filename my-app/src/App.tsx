import React from 'react';
import Post from './components/Post';
import { AppProvider } from './context/AppContext';



function App() {
  return (
    <AppProvider>
      <div >
        <Post />
      </div>
    </AppProvider>

  );
}

export default App;
