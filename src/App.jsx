import { Route, Routes } from 'react-router-dom'
import { Home, ExerciseDetail, NotFound } from './pages'
import { Navbar, Footer } from './components'

function App() {
    return (
        <main className='relative'>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exercise/:id" element={<ExerciseDetail />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </main>
    )
}

export default App
