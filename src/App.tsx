import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Download from './pages/DownloadPage/Download'
import Home from './pages/HomePage/Home'
import NotFound from './pages/NotFoundPage/NotFound'
import Profile from './pages/ProfilePage/Profile'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='*' element={<NotFound />} />
                    <Route path='/' element={<Home />} />
                    <Route path='download' element={<Download />} />
                    {localStorage.getItem('current_user') && <Route path='profile' element={<Profile />} />}
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App