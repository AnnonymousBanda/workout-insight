import { useRef } from 'react'
import { BodyPart } from './index'
import LeftArrow from './../assets/icons/left-arrow.png'
import RightArrow from './../assets/icons/right-arrow.png'

const HorizontalScroll = ({ bodyParts, bodyPart, setBodyPart, categoryRef }) => {
    const scrollRef = useRef(null)

    const handleScroll = (direction) => {
        // const xCoords = scrollRef.current.getBoundingClientRect().left
        // let newCoords = xCoords
        if (direction === 'left') {
            scrollRef.current.style.transform = `translateX(-100px)`
        } else {
            scrollRef.current.style.transform = `translateX(100px)`
        }
    }

    return (
        <div className="pt-[5rem] overflow-x-hidden">
            <div className="w-[220%] flex flex-row" ref={scrollRef}>
                {bodyParts.map((part) => (
                    <div
                        key={part}
                        className="w-[20%] flex justify-center items-center"
                    >
                        <BodyPart
                            part={part}
                            bodyPart={bodyPart}
                            setBodyPart={setBodyPart}
                            categoryRef={categoryRef}
                        />
                    </div>
                ))}
            </div>
            <div className="flex flex-row gap-[50px] justify-center items-center mt-[50px]">
                <img
                    src={LeftArrow}
                    alt="left arrow"
                    className="cursor-pointer"
                    onClick={() => handleScroll('left')}
                />
                <img
                    src={RightArrow}
                    alt="right arrow"
                    className="cursor-pointer"
                    onClick={() => handleScroll('right')}
                />
            </div>
        </div>
    )
}

export default HorizontalScroll
