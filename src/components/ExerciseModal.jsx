import { camelize } from '../utils/stringAPI'
import { useRef } from 'react'

const ExerciseModal = ({ exercise, setModalIsVisible }) => {
    const overlayRef = useRef(null)
    const { name, bodyPart, equipment, gifUrl, target, instructions } =
        exercise

    console.log('modal rendered')
    return (
        <div
            className="fixed w-full h-screen top-0 left-0 z-[100] backdrop-blur-lg flex justify-center items-center"
            ref={overlayRef}
            onClick={() => {
                overlayRef.current.style.display = 'none'
                setModalIsVisible(false)
                document.body.style.overflow = 'auto'
            }}
        >
            <div
                className={
                    'w-auto bg-bg-secondary shadow-xl box-content px-[2rem] py-[2rem] flex flex-col gap-5 items-center justify-start'
                }
            >
                <h3 className="text-primary text-center">{camelize(name)}</h3>
                <img
                    src={gifUrl}
                    alt={name}
                    className="w-[250px] md:block hidden"
                />
                <div className="md:flex hidden flex-wrap gap-5">
                    <p className="text-[1.6rem] tracking-tighter">
                        Body Part: {camelize(bodyPart)}
                    </p>
                    <p className="text-[1.6rem] tracking-tighter">
                        Equipment: {camelize(equipment)}
                    </p>
                    <p className="text-[1.6rem] tracking-tighter">
                        Targets: {camelize(target)}
                    </p>
                </div>
                <div>
                    <p className="text-[2.2rem] font-semibold">Instructions</p>
                    <ul className="text-[1.4rem]">
                        {instructions.map((instruction, index) => (
                            <li key={'list' + index}>
                                {index + 1}. {instruction}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ExerciseModal
