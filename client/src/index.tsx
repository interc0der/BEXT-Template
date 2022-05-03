import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('index-root') as HTMLElement
);
root.render(
  <React.StrictMode>
        <div className="root-wrapper">
            This is the index again
        </div>
  </React.StrictMode>
);
