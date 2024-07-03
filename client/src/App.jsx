import { Route, Routes } from 'react-router-dom'
import { Home, ExerciseDetail, NotFound } from './pages'
import { Navbar, Footer } from './components'
import { useRef } from 'react'

function App() {
    const exerciseRef = useRef(null)
    return (
        <main className="relative">
            <Navbar exerciseRef={exerciseRef} />
            <Routes>
                <Route path="/" element={<Home exerciseRef={exerciseRef} />} />
                <Route path="/exercise/:id" element={<ExerciseDetail />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </main>
    )
}

export default App
