import leftArrow from './../assets/icons/left-arrow.png'
import rightArrow from './../assets/icons/right-arrow.png'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { ExerciseCard } from './index'
import { fetchData } from '../utils'

const Exercise = ({ exercises, setExercises, bodyPart }) => {
    useEffect(() => {
        const fetchExercises = async () => {
            let data = await fetchData(bodyPart)

            setExercises(data)
        }
        fetchExercises()

        return () => {}
    }, [bodyPart])

    return (
        <div className="max-container w-full py-[5rem]">
            <h2>Showing Results</h2>
            <div>
                <PaginatedItems items={exercises} />
            </div>
        </div>
    )
}

function Items({ exercises }) {
    return (
        <div className="flex flex-row flex-wrap gap-[3rem] w-full justify-evenly">
            {exercises ? (
                exercises.map((exercise, index) => (
                    <ExerciseCard key={index} exercise={exercise} />
                ))
            ) : (
                <div>I am null</div>
            )}
        </div>
    )
}

function PaginatedItems({ items }) {
    const [itemOffset, setItemOffset] = useState(0)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const itemsPerPage =
        windowWidth > 1440
            ? 12
            : windowWidth > 1024
              ? 8
              : windowWidth > 425
                ? 6
                : 5

    window.addEventListener('resize', () => {
        setWindowWidth(window.innerWidth)
    })

    const endOffset = itemOffset + itemsPerPage

    const currentItems = items.slice(itemOffset, endOffset)
    const pageCount = Math.ceil(items.length / itemsPerPage)

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length

        setItemOffset(newOffset)
    }

    return (
        <div className="flex flex-col gap-[6rem]">
            <Items exercises={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel={<img src={rightArrow} alt="right-arrow" />}
                previousLabel={<img src={leftArrow} alt="left-arrow" />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                renderOnZeroPageCount={null}
                className="flex justify-center items-center gap-[10px] text-[1.6rem]"
            />
        </div>
    )
}

export default Exercise
