import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './components/Layout/Layout'
import './index.css'
import Home from './pages/HomePage/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Download from './pages/DownloadPage/Download'
import { Provider } from 'react-redux'
import { store } from './store/store';
import Profile from './pages/ProfilePage/Profile'
import NotFound from './pages/NotFoundPage/NotFound'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout>
        <App />
      </Layout>
    </Provider>
  </React.StrictMode >,
  document.getElementById('root')
);
