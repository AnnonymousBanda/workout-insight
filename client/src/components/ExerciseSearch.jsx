import { useState, useEffect } from 'react'
import { HorizontalScroll } from './index'
import { fetchData, filterData } from '../utils/index'

const ExerciseSearch = ({ exercises, setExercises, bodyPart, setBodyPart }) => {
    const [search, setSearch] = useState('')
    const [bodyParts, setBodyParts] = useState([])

    useEffect(() => {
        ;(async () => {
            const bodyPartLists = await fetchData('bodyPartList')

            setBodyParts(['all', ...bodyPartLists])
        })()

        return () => {}
    }, [])

    const handleSearch = async () => {
        try {
            let data = await fetchData('exercise')

            data = filterData(data, search)

            setSearch('')
            setExercises(data)
            console.log(exercises)
        } catch (error) {
            return console.log(error)
        }
    }
    return (
        <div className="w-full bg-bg-secondary">
            <div className="max-container w-full py-[7rem]">
                <h2 className="text-center leading-[4rem] mb-[7rem]">
                    Explore&nbsp;Different
                    <br />
                    Exercises
                </h2>
                <div className="flex justify-center">
                    <input
                        type="text"
                        value={search}
                        placeholder="Search Exercises"
                        onChange={(e) =>
                            setSearch(e.target.value.toLowerCase())
                        }
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') handleSearch()
                        }}
                        className="outline-none border-none s:py-[1rem] s:px-[2rem] rounded-l-md l:text-[1.8rem] md:w-[500px] w-full py-[0.5rem] px-[1rem] text-[1.4rem]"
                    />
                    <button
                        className="bg-primary l:text-[1.8rem] py-[1rem] px-[2rem] text-white rounded-r-md text-[1.4rem]"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>
                <div>
                    <HorizontalScroll
                        bodyParts={bodyParts}
                        bodyPart={bodyPart}
                        setBodyPart={setBodyPart}
                    />
                </div>
            </div>
        </div>
    )
}

export default ExerciseSearch
