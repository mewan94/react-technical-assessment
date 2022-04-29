import React from 'react';
// import { Counter } from './features/counter/Counter';
import { UserForm } from './features/userForm/UserForm';
import Footer from './features/footer/footer';

function App() {
  return (
    <div className="App min-h-screen bg-gray-300 pt-20" data-testid="app-1">
      <UserForm />
      <Footer title='Technical Assessment'/>
    </div>
  );
}

export default App;
