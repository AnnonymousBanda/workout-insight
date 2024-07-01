import { camelize } from '../utils'
import bodyPartImg from './../assets/icons/body-part.png'
import equipmentImg from './../assets/icons/equipment.png'
import targetImg from './../assets/icons/target.png'

const ExerciseDetailView = ({ exercise }) => {
    if (!exercise) {
        return (
            <div className="text-center text-xl py-10">
                Loading exercise details...
            </div>
        )
    }

    const { name, bodyPart, gifUrl, target, equipment, instructions } = exercise

    return (
        <section className="max-container w-full min-h-svh py-[8rem]">
            <h2 className="mb-[4rem]">{camelize(name)}</h2>
            <div className="flex justify-center gap-[10rem] items-center flex-wrap">
                <div className="border-2 border-primary border-solid fit-content min-w-[300px]">
                    <img src={gifUrl} alt="exercise gif" />
                </div>
                <div className="flex-grow flex flex-col gap-[2rem]">
                    <ul className="self-center flex flex-wrap gap-[3rem]">
                        <li className="flex flex-row items-center text-[1.6rem] ">
                            <img src={bodyPartImg} alt="body part icon" />
                            <span>{camelize(bodyPart)}</span>
                        </li>
                        <li className="flex flex-row items-center text-[1.6rem] ">
                            <img src={targetImg} alt="target icon" />
                            <span>{camelize(target)}</span>
                        </li>
                        <li className="flex flex-row items-center text-[1.6rem] ">
                            <img src={equipmentImg} alt="equipment icon" />
                            <span>{camelize(equipment)}</span>
                        </li>
                    </ul>
                    <div>
                        <h3>Instruction:-</h3>
                        <ul>
                            {instructions.map((instruction, index) => (
                                <li
                                    key={index}
                                    className="text-[1.4rem]"
                                >{`${index + 1}. ${instruction}`}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExerciseDetailView
