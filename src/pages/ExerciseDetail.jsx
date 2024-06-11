import { ExerciseCard, ExerciseModal } from './../components/index.js'
import { useState } from 'react'

const ExerciseDetail = ({ bodyPart, setBodyPart, exercises, setExercises }) => {
    console.log(bodyPart)
    //setting state hooks
    const [modalIsVisible, setModalIsVisible] = useState(false)
    const [exercise, setExercise] = useState()
    console.log('I am also rendered')
    //returning the JSX
    return (
        <div className="max-container w-full min-h-screen pt-[15rem] pb-[7.5rem]">
            <div className="flex flex-wrap gap-5 justify-center">
                {exercises &&
                    exercises.map((exe, index) => (
                        <ExerciseCard
                            exercise={exe}
                            key={index}
                            handleClick={() => {
                                setModalIsVisible(true)
                                setExercise(exe)
                                document.body.style.overflow = 'hidden'
                                console.log(exercise)
                            }}
                        />
                    ))}
            </div>

            {modalIsVisible && (
                <ExerciseModal
                    modalIsVisible={modalIsVisible}
                    setModalIsVisible={setModalIsVisible}
                    exercise={exercise}
                />
            )}
        </div>
    )
}

export default ExerciseDetail
