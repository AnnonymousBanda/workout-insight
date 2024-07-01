import { useEffect, useState } from 'react'
import { camelize, fetchData, filterData } from '../utils'

const ExerciseSuggestion = ({ basis, exercise }) => {
    const [exercises, setExercises] = useState(null)
    useEffect(() => {
        const fetchSuggestedExercises = async () => {
            let response = await fetchData('all')
            if (Array.isArray(exercise[basis])) {
                const temp = response
                response = []
                for (let i = 0; i < exercise[basis].length; i++)
                    response.push(...filterData(temp, exercise[basis][0]))
            } else {
                response = filterData(response, exercise[basis])
            }

            setExercises(response)
        }

        fetchSuggestedExercises()
    }, [basis])

    console.log(exercise[basis])
    return (
        <div className="max-container w-full">
            <h3>
                Recommended Exercises related to{' '}
                <span className="text-primary">{camelize(basis)}</span>{' '}
            </h3>
            <div className="overflow-hidden">
                <div className="flex basis-[200px] w-auto">
                    {exercises
                        ? exercises.map((exercise, index) => {
                              return (
                                  <div key={exercise.id + index}>
                                      <h5>{exercise.name}</h5>
                                      <img
                                          src={exercise.gifUrl}
                                          alt="exercise gif"
                                      />
                                  </div>
                              )
                          })
                        : null}
                </div>
            </div>
        </div>
    )
}

export default ExerciseSuggestion
