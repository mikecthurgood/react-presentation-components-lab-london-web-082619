import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const handleClick = (e) => {
  console.log('happy happy happy')
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={handleClick} />
  </div>,
  document.getElementById('root')
);