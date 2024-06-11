import { Route, Routes } from 'react-router-dom'
import { Home, ExerciseDetail, NotFound } from './pages'
import { Navbar, Footer } from './components'
import { useState, useEffect } from 'react'
import { fetchBodyExercises } from './utils/fetchData'

function App() {
    const [bodyPart, setBodyPart] = useState('')
    const [exercises, setExercises] = useState(null)
    useEffect(() => {
        ;(async () => {
            const data = await fetchBodyExercises(bodyPart)
            setExercises(data)
            console.log('Changed exersises')
        })()
    }, [bodyPart])
    console.log(bodyPart)

    return (
        <main className="relative">
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            setBodyPart={setBodyPart}
                            bodyPart={bodyPart}
                            setExercises={setExercises}
                            exercises={exercises}
                        />
                    }
                />
                <Route
                    path="/exercise"
                    element={
                        <ExerciseDetail
                            bodyPart={bodyPart}
                            setBodyPart={setBodyPart}
                            setExercises={setExercises}
                            exercises={exercises}
                        />
                    }
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </main>
    )
}

export default App
