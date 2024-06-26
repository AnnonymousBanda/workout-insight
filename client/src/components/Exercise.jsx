import { useEffect } from 'react'
import { ExerciseCard } from './index'
import { fetchData } from '../utils'

const Exercise = ({ exercises, setExercises, bodyPart }) => {
    useEffect(() => {
        ;(async () => {
            let data = await fetchData(bodyPart)

            setExercises(data)
        })()

        return () => {}
    }, [bodyPart])

    return (
        <div className="max-container w-full py-[5rem]">
            <h2>Showing Results</h2>
            <div className="flex flex-row flex-wrap w-full justify-evenly">
                {exercises ? (
                    exercises.map((exercise, index) => (
                        <ExerciseCard key={index} exercise={exercise} />
                    ))
                ) : (
                    <div>I am null</div>
                )}
            </div>
        </div>
    )
}

export default Exercise
