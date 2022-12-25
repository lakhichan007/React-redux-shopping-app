import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import store from "./components/redux/store"
import Footer from './components/footer/footer';
import Navbar from './components/header/Navbar';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Provider store={store}>
    <App />
    </Provider>
    <Footer/>
  </React.StrictMode>
);


