// React Required
import React from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

const Root: React.FC = () => {
        return (
                <div className="root-wrapper">
                        This is the index page
                </div>
                )
}

ReactDOM.render(<Root />, document.getElementById('index-root'));
//serviceWorker.register();