import Hero from '../assets/images/hero.png'
import Body from '../assets/images/map.svg'
// import { useEffect } from 'react'
import ExerciseDetail from './ExerciseDetail'
// import { fetchBodyExercises } from '../utils/fetchData.js'
import { Link } from 'react-router-dom'
import { camelize } from '../utils/stringAPI.js'

const Home = ({ setBodyPart, bodyPart, exercises, setExercises }) => {
    const bodyPartsList = [
        'back',
        'cardio',
        'chest',
        'lower arms',
        'lower legs',
        'neck',
        'shoulders',
        'upper arms',
        'upper legs',
        'waist',
    ]
    return (
        <div className="w-full">
            <header className="max-container w-full h-svh flex justify-between items-center">
                <h2 className="font-bold">
                    Feel The Burn
                    <br />
                    <span className="text-primary">Sweat</span> is
                    <br />
                    <span className="text-primary">Fat&nbsp;Crying</span>
                </h2>
                <img
                    src={Hero}
                    alt="exercising figure"
                    className="md:block hidden max-w-[450px] min-w-[30rem]"
                />
            </header>

            <div className="w-full bg-secondary">
                <section
                    id="map"
                    className="max-container w-full px-custom py-[5rem]"
                >
                    <h3 className="text-primary font-semibold">Exercise Map</h3>
                    <p className="text-[2.2rem] tracking-tighter">
                        Click on the body parts to explore exercises tailored
                        for each area
                        <br />
                        or search for yourself
                    </p>
                    <img
                        src={Body}
                        alt="body figure"
                        className="m-auto mt-[2rem]"
                    />
                </section>
            </div>

            <div className="w-full">
                <section className="max-container w-full px-custom py-[6rem]">
                    <h3 className="font-semibold mb-[4rem]">
                        Navigate to the{' '}
                        <span className="text-primary ">BODY Exercises</span>
                    </h3>

                    <div className="flex justify-between flex-wrap gap-10">
                        {bodyPartsList.map((bp) => {
                            return (
                                <Link 
                                    key={bp}
                                    to="/exercise"
                                    elemeent={
                                        <ExerciseDetail exercises={exercises} />
                                    }
                                >
                                    <button
                                        className="bg-primary text-white"
                                        onClick={(e) => {
                                            setBodyPart(`/bodyPart/${bp}`)
                                            console.log('Changed bodypart')
                                        }}
                                    >
                                        {camelize(bp)}
                                    </button>
                                </Link>
                            )
                        })}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home
