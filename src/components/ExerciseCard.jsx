import { camelize } from '../utils/stringAPI'
const ExerciseCard = ({ exercise, handleClick }) => {
    const { name, gifUrl, bodyPart, equipment, target } = exercise
    return (
        <div className="flex flex-col items-center gap-5 w-[200px] bg-bg-secondary py-[2rem] px-[5rem] box-content rounded-lg">
            <h4 className="text-primary font-semibold">{camelize(name)}</h4>
            <div className='w-[25rem] h-[25rem] rounded-lg  relative backdrop-blur-lg bg-bg-primary'>
                <img
                    src={gifUrl}
                    alt={camelize(name)}
                    className="w-full rounded-lg absolute top-0 left-0"
                    onClick={handleClick}
                />
            </div>
            <div className="flex justify-evenly flex-wrap gap-5">
                <p className="text-[1.4rem] tracking-tighter">
                    Body part: {camelize(bodyPart)}
                </p>
                <p className="text-[1.4rem] tracking-tighter">
                    Targets: {camelize(target)}
                </p>
                <p className="text-[1.4rem] tracking-tighter">
                    Equipments: {camelize(equipment)}
                </p>
            </div>
        </div>
    )
}

export default ExerciseCard
