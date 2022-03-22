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

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='download' element={<Download />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Layout>
    </Provider>
  </React.StrictMode >,
  document.getElementById('root')
);
