import { camelize } from '../utils/stringAPI'
// import { useRef } from 'react'

const ExerciseCard = ({ exercise, handleClick }) => {
    // const widthRef = useRef(null)
    const { name, gifUrl, bodyPart, equipment, target } = exercise

    return (
        <div className="max-w-[25rem] bg-bg-secondary rounded-lg shadow-md overflow-hidden"> {/*ref={widthRef} */}
            <div className="bg-red-500 text-white py-[1rem] text-center">
                <h3 className="text-[1.3rem] font-semibold">
                    {camelize(name)}
                </h3>
            </div>
            <div className="bg-white" >{/*width={widthRef.current.getAttribute("width")} height={widthRef.current.getAttribute("width")} */}
                <img
                    src={gifUrl}
                    alt={name}
                    className="w-full rounded-b-lg"
                    onClick={handleClick}
                />
            </div>
            <div className="p-5 text-center">
                <div className="text-gray-700 my-3 text-[1.3rem] text-start">
                    <span className="font-bold">Body Part:</span>{' '}
                    {camelize(bodyPart)}
                </div>
                <div className="text-gray-700 my-3 text-[1.3rem] text-start">
                    <span className="font-bold">Targets:</span>{' '}
                    {camelize(target)}
                </div>
                <div className="text-gray-700 my-3 text-[1.3rem] text-start">
                    <span className="font-bold">Equipment:</span>{' '}
                    {camelize(equipment)}
                </div>
            </div>
        </div>
    )
}

export default ExerciseCard
