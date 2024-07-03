import { useState } from 'react'
import { Header, ExerciseSearch, Exercise } from './../components/index'

const Home = ({ exerciseRef }) => {
    const [exercises, setExercises] = useState([])
    const [bodyPart, setBodyPart] = useState('all')
    return (
        <div className="w-full">
            <Header />
            <ExerciseSearch
                exercises={exercises}
                setExercises={setExercises}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
                exerciseRef={exerciseRef}
            />
            <Exercise
                exercises={exercises}
                setExercises={setExercises}
                bodyPart={bodyPart}
            />
        </div>
    )
}

export default Home
