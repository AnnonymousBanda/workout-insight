import React, { useEffect, useRef, useState } from 'react'
import { camelize } from '../utils/index'
import { Link } from 'react-router-dom'

const ExerciseCard = ({ exercise }) => {
    const cardRef = useRef(null)
    // const [cardWidth, setCardWidth] = useState(null)

    // useEffect(() => {
    //     const width = cardRef.current.offsetWidth
    //     setCardWidth(width)
    //     console.log('cardWidth:', cardWidth)
    // }, [cardWidth])

    // window.addEventListener('resize', () => {
    //     setCardWidth(cardRef.current.offsetWidth)
    // })

    return (
        <Link to={`/exercise/${exercise.id}`}>
            <div
                className="flex flex-col gap-[2rem] shadow-effect rounded-lg items-center pb-4 my-9 max-w-[350px] w-auto min-w-[200px] "
                ref={cardRef}
            >
                <img
                    src={exercise.gifUrl}
                    alt="exercises"
                    className="rounded-lg"
                />
                <div className="flex gap-[2rem] flex-wrap justify-center">
                    <p className="text-[1.4rem] py-2 px-8 rounded-full bg-red-500 text-white ">
                        {camelize(exercise.bodyPart)}
                    </p>
                    <p className="text-[1.4rem] py-2 px-8 rounded-full bg-slate-500 text-white ">
                        {camelize(exercise.target)}
                    </p>
                </div>
                <h4 className="break-normal w-[80%] text-center">
                    {camelize(exercise.name)}
                </h4>
            </div>
        </Link>
    )
}

export default ExerciseCard
