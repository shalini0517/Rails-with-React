import * as React from 'react';
import * as ReactDOM from 'react-dom/client'; // Update to use 'react-dom/client'
// react dom is deprecated
import List from "./List";

const Welcome = () => {

  const handleCreateClick = ()=>{
    alert("Create Clicked")
  }

  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-blue-300 shadow-sm">
        <div className="container-fluid px-4 py-2">
          <h2>To-Do List</h2>
        </div>
      </nav>
      <List/>
    </>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('welcome');
  
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<Welcome />);
  }
});

export default Welcome;
// this is app.js
