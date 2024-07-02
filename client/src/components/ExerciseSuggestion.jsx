import leftArrow from './../assets/icons/left-arrow.png'
import rightArrow from './../assets/icons/right-arrow.png'
import ReactPaginate from 'react-paginate'
import { useEffect, useState } from 'react'
import { ExerciseCard } from './index'
import { camelize, fetchData, filterData } from '../utils'

const ExerciseSuggestion = ({ basis, exercise }) => {
    const [exercises, setExercises] = useState(null)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    useEffect(() => {
        const fetchSuggestedExercises = async () => {
            let response = await fetchData('all')
            if (Array.isArray(exercise[basis])) {
                const temp = response
                response = []
                for (let i = 0; i < exercise[basis].length; i++)
                    response.push(...filterData(temp, exercise[basis][0]))
            } else {
                response = filterData(response, exercise[basis])
            }

            setExercises(response)
        }

        fetchSuggestedExercises()
    }, [basis])

    const itemsPerPage = windowWidth > 1024 ? 3 : windowWidth > 768 ? 2 : 1

    window.addEventListener('resize', () => {
        setWindowWidth(window.innerWidth)
    })

    if (!exercises) return null

    return (
        <div className="max-container w-full py-[6rem]">
            <h3>
                Recommended Exercises related to{' '}
                <span className="text-primary">{camelize(basis)}</span>{' '}
            </h3>
            <div>
                <PaginatedItems
                    itemsPerPage={itemsPerPage}
                    items={exercises}
                    windowWidth={windowWidth}
                />
            </div>
        </div>
    )
}

function Items({ currentItems, windowWidth }) {
    return (
        <div
            className={
                'flex flex-row items-start py-[2rem] ' +
                (windowWidth < 768 ? 'justify-center' : 'justify-between ')
            }
        >
            {currentItems &&
                currentItems.map((exercise) => {
                    return (
                        <ExerciseCard key={exercise.id} exercise={exercise} />
                    )
                })}
        </div>
    )
}

function PaginatedItems({ itemsPerPage, items, windowWidth }) {
    const [itemOffset, setItemOffset] = useState(0)

    const endOffset = itemOffset + itemsPerPage

    const currentItems = items.slice(itemOffset, endOffset)
    const pageCount = Math.ceil(items.length / itemsPerPage)

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length

        setItemOffset(newOffset)
    }

    return (
        <div className="">
            <Items currentItems={currentItems} windowWidth={windowWidth} />
            <ReactPaginate
                breakLabel="..."
                nextLabel={<img src={rightArrow} alt="right-arrow" />}
                previousLabel={<img src={leftArrow} alt="left-arrow" />}
                className="flex justify-center items-center gap-[10px] text-[1.6rem]"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                renderOnZeroPageCount={null}
            />
        </div>
    )
}

export default ExerciseSuggestion
