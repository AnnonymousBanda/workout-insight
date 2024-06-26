import Hero from '../assets/images/hero.png'

const Home = ({ setBodyPart, bodyPart, exercises, setExercises }) => {
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
        </div>
    )
}

export default Home
