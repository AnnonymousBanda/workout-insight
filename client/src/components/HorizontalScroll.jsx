import leftArrow from './../assets/icons/left-arrow.png'
import rightArrow from './../assets/icons/right-arrow.png'
import gym from './../assets/icons/gym.png'
import ReactPaginate from 'react-paginate'
import { useState } from 'react'

function Items({ currentItems, setBodyPart }) {
    return (
        <div className="flex flex-row items-center justify-between py-[6rem]">
            {currentItems &&
                currentItems.map((item) => (
                    <div
                        key={item}
                        className="cursor-pointer flex flex-col items-center justify-center w-[100px]"
                        onClick={(e) => {
                            setBodyPart(item)
                        }}
                    >
                        <img src={gym} alt="gym" className="w-[5rem]" />
                        <p className="text-[1.8rem] font-semibold text-center w-full">
                            {item}
                        </p>
                    </div>
                ))}
        </div>
    )
}

function HorizontalScroll({ bodyParts, setBodyPart }) {
    const [itemOffset, setItemOffset] = useState(0)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const itemsPerPage = windowWidth > 1024 ? 4 : windowWidth > 640 ? 3 : 2
    
    window.addEventListener('resize', () => {
        setWindowWidth(window.innerWidth)
    })

    const endOffset = itemOffset + itemsPerPage
    const currentItems = bodyParts.slice(itemOffset, endOffset)
    const pageCount = Math.ceil(bodyParts.length / itemsPerPage)

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % bodyParts.length

        setItemOffset(newOffset)
    }

    return (
        <>
            <Items currentItems={currentItems} setBodyPart={setBodyPart} />
            <ReactPaginate
                nextLabel={<img src={rightArrow} alt="right-arrow" />}
                previousLabel={<img src={leftArrow} alt="left-arrow" />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                renderOnZeroPageCount={null}
                className="flex justify-center items-center gap-[10px] text-[1.6rem]"
            />
        </>
    )
}

export default HorizontalScroll
