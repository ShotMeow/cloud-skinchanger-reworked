import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Download from './pages/DownloadPage/Download'
import Home from './pages/HomePage/Home'
import NotFound from './pages/NotFoundPage/NotFound'
import Profile from './pages/ProfilePage/Profile'
import { useAppSelector } from './store/hooks'

const App = () => {
    const users = useAppSelector(state => state.users.users)
    const currentUser = users.find(user => user.token === localStorage.getItem('token'))

    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='*' element={<NotFound />} />
                    <Route path='/' element={<Home />} />
                    <Route path='download' element={<Download />} />
                    {currentUser && <Route path='profile' element={<Profile />} />}
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App