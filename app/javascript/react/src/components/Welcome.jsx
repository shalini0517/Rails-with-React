import * as React from 'react';
import * as ReactDOM from 'react-dom/client'; // Update to use 'react-dom/client'
// react dom is deprecated

const Welcome = () => {
  return (
    <div className="container">
      <h1>Welcome to React!</h1>
    </div>
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
