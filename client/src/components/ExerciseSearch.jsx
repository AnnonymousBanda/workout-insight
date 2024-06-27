import { useState } from 'react'
import fetchData from './../utils/fetchData'

const ExerciseSearch = () => {
    const [search, setSearch] = useState('')
    const handleSearch = async () => {
        try {
            let data = await fetchData('exercise')

            data = data.filter((exercise) => {
                return (
                    exercise.name.includes(search) ||
                    exercise.target.includes(search) ||
                    exercise.equipment.includes(search) ||
                    exercise.bodyPart.includes(search) ||
                    exercise.secondaryMuscles.some((e) => e.includes(search))
                )
            })

            console.log(data)
        } catch (error) {
            return console.error(error)
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
                        className="outline-none border-none py-[1rem] px-[2rem] rounded-l-md text-[1.8rem] md:w-[500px]"
                    />
                    <button
                        className="bg-primary text-[1.8rem] py-[1rem] px-[2rem] text-white rounded-r-md"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ExerciseSearch
