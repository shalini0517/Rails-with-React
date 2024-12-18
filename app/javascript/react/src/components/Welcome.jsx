import * as React from 'react';
import * as ReactDOM from 'react-dom/client'; // Update to use 'react-dom/client'
// react dom is deprecated
import Home from "./Home";

const Welcome = () => {
  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-blue-300 mb-4 p-3">
        <div className="container">
          <ul className="navbar-nav gap-4 ms-auto">
            <li className="nav-item">Home</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Contact</li>
          </ul>
        </div>
      </nav>
      <Home/>
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
