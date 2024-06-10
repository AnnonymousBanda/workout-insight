import { Route, Routes } from 'react-router-dom'
import { Home, ExerciseDetail, NotFound } from './pages'
import { Navbar, Footer } from './components'
import { useState } from 'react'

function App() {
    const [bodyPart, setBodyPart] = useState('back')

    return (
        <main className='relative'>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home setBodyPart={setBodyPart}/>} />
                <Route path="/exercise" element={<ExerciseDetail bodyPart={bodyPart} setBodyPart={setBodyPart}/>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </main>
    )
}

export default App
