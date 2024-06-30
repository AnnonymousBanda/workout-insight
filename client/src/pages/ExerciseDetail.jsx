import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import fetchData from '../utils/fetchData'

const ExerciseDetail = () => {
    const [exercise, setExercise] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        ;(async () => {
            const exerciseData = await fetchData(`?id=${id}`)
            setExercise(exerciseData)
        })()
    }, [id])

    console.log(exercise)

    return <div></div>
}

export default ExerciseDetail
