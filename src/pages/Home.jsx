import Hero from '../assets/images/hero.png'
const Home = () => {
    return (
        <div className="max-container w-full">
            <header className="w-full h-svh flex justify-between items-center">
                <h2 className="font-semibold">
                    Feel The Burn
                    <br />
                    Let <span className='text-primary'>Sweat</span> Be Your
                    <br />
                    <span className='text-primary'>Fat&nbsp;Crying</span>
                </h2>
                <img src={Hero} alt="exercising figure" className='md:block hidden max-w-[450px] min-w-[30rem]'/>
            </header>
        </div>
    )
}

export default Home
