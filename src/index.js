import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider as StoreProvider } from 'react-redux';
import store from './store';

// * Style Sheets
import 'react-toastify/dist/ReactToastify.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

// * ------------- *//

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <BrowserRouter>
        <ToastContainer position='top-right' />
        <App />
      </BrowserRouter>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
