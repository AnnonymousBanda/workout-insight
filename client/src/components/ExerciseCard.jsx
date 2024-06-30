import React from 'react'
import { camelize } from '../utils/index'
import { Link } from 'react-router-dom'

const ExerciseCard = ({ exercise }) => {
    return (
        <div className="flex flex-col gap-[2rem] shadow-effect rounded-lg items-center pb-4 my-9 max-w-[350px] w-auto min-w-[200px] ">
            <Link>
                <img
                    src={exercise.gifUrl}
                    alt="exercises"
                    className="rounded-lg"
                />
            </Link>
            <div className="flex gap-[2rem] flex-wrap justify-center">
                <p className="text-[1.4rem] py-2 px-8 rounded-full bg-red-500 text-white ">
                    {exercise.bodyPart}
                </p>
                <p className="text-[1.4rem] py-2 px-8 rounded-full bg-slate-500 text-white ">
                    {exercise.target}
                </p>
            </div>
            <h4 className='break-normal w-[80%] text-center'>{camelize(exercise.name)}</h4>
        </div>
    )
}

export default ExerciseCard
