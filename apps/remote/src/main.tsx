import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import("./bootstrap.js")
import App from './app/app';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
