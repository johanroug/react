import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import todoStore from './todo/TodoStore';

ReactDOM.render(<App store={todoStore} />, document.getElementById('root'));
registerServiceWorker();
