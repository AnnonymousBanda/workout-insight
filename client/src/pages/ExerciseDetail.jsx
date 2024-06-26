import { ExerciseCard, ExerciseModal } from './../components/index.js'
import { useState } from 'react'

const ExerciseDetail = ({ exercises }) => {
    //setting state hooks
    const [modal, setModal] = useState(null)

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
                                setModal(true)
                                // setExercise(exe)
                                console.log(modal)
                                setModal(exe)
                                document.body.style.overflow = 'hidden'
                            }}
                        />
                    ))}
            </div>

            {modal && <ExerciseModal setModal={setModal} modal={modal} />}
        </div>
    )
}

export default ExerciseDetail
