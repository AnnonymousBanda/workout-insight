import Hero from '../assets/images/hero.png'
import Body from '../assets/images/map.svg'
import { useEffect } from 'react'
import ExerciseDetail from './ExerciseDetail'
import { Link } from 'react-router-dom'

const Home = ({ setBodyPart }) => {
    // useEffect(() => {
    //     setBodyPart('back')
    // }, [])

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
                        <button
                            className="bg-primary text-white"
                            onClick={(e) => {
                                setBodyPart('back')
                                window.location.href = '/exercise'
                            }}
                        >
                            Back
                        </button>
                        <button
                            className="bg-primary text-white"
                            onClick={(e) => {
                                setBodyPart('chest')
                                window.location.href = '/exercise'
                            }}
                        >
                            Chest
                        </button>
                        <button
                            className="bg-primary text-white"
                            onClick={(e) => {
                                setBodyPart('lower arms')
                                window.location.href = '/exercise'
                            }}
                        >
                            Lower arms
                        </button>
                        <button
                            className="bg-primary text-white"
                            onClick={(e) => {
                                setBodyPart('lower legs')
                                window.location.href = '/exercise'
                            }}
                        >
                            Lower legs
                        </button>
                        <button
                            className="bg-primary text-white"
                            onClick={(e) => {
                                setBodyPart('neck')
                                window.location.href = '/exercise'
                            }}
                        >
                            neck
                        </button>
                        <button
                            className="bg-primary text-white"
                            onClick={(e) => {
                                setBodyPart('shouders')
                                window.location.href = '/exercise'
                            }}
                        >
                            shoulders
                        </button>
                        <button
                            className="bg-primary text-white"
                            onClick={(e) => {
                                setBodyPart('cardio')
                                window.location.href = '/exercise'
                            }}
                        >
                            cardio
                        </button>
                        <button
                            className="bg-primary text-white"
                            onClick={(e) => {
                                setBodyPart('upper arms')
                                window.location.href = '/exercise'
                            }}
                        >
                            upper arms
                        </button>
                        <button
                            className="bg-primary text-white"
                            onClick={(e) => {
                                setBodyPart('upper legs')
                                window.location.href = '/exercise'
                            }}
                        >
                            upper legs
                        </button>
                        <button
                            className="bg-primary text-white"
                            onClick={(e) => {
                                setBodyPart('waist')
                                window.location.href = '/exercise'
                            }}
                        >
                            waist
                        </button>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home
