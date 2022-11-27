import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Provider} from 'react-redux'
import Store from './Config/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
        <Router>
            <Provider store={Store}>
                <App />
            </Provider>
        </Router>
        <ToastContainer
            position='top-right'
            theme={'colored'}
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            pauseOnHover
        />
    </>
)
