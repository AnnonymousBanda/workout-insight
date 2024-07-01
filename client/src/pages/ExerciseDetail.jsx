import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import fetchData from '../utils/fetchData'
import { ExerciseDetailView, ExerciseSuggestion } from './../components/index'

const ExerciseDetail = () => {
    const [exercise, setExercise] = useState(null)
    const [loading, setLoading] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        const fetchExerciseData = async () => {
            setLoading(true)
            try {
                const exerciseData = await fetchData(`?id=${id}`)
                setExercise(exerciseData)
            } catch (error) {
                console.error('Error fetching exercise data:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchExerciseData()
    }, [id])

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            {exercise ? (
                <>
                    <ExerciseDetailView exercise={exercise} />
                    {/* <ExerciseSuggestion basis="equipment" exercise={exercise}/>
                    <ExerciseSuggestion basis="secondaryMuscles" exercise={exercise}/> */}
                </>
            ) : (
                <div>No exercise data available.</div>
            )}
        </div>
    )
}

export default ExerciseDetail
