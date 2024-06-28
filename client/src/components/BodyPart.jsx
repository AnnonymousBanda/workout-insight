import icon from './../assets/icons/gym.png'

const BodyPart = ({ part, bodyPart, setBodyPart }) => {
    return (
        <div
            className="flex flex-col items-center flex-shrink-0 cursor-pointer"
            onClick={(e) => setBodyPart(part)}
        >
            <img src={icon} alt="gym icon" className="w-[35px]" />
            <h4
                className={
                    'w-[110px] text-center' +
                    (part === bodyPart
                        ? ' border-b-4 border-red-600 border-solid'
                        : '')
                }
            >
                {part}
            </h4>
        </div>
    )
}

export default BodyPart
