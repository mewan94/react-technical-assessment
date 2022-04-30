import React from 'react';
import User from './features/userForm';
import Header from './features/header/header';

function App() {
  return (
    <div className="App min-h-screen bg-gray-300" data-testid="app-1">
      <Header title='Technical Assessment'/>
      <User />
    </div>
  );
}

export default App;
