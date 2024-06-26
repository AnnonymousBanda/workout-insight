import { Route, Routes } from 'react-router-dom'
import { Home, NotFound } from './pages'
import { Navbar } from './components'

function App() {
    return (
        <main className="relative">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
    )
}

export default App
