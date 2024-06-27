import { useState } from 'react'
import { Header, ExerciseSearch, Exercise } from './../components/index'

const Home = () => {
    return (
        <div className="w-full">
            <Header />
            <ExerciseSearch />
            {/* <Exercise /> */}
        </div>
    )
}

export default Home
