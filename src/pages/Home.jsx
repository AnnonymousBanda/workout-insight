import Hero from '../assets/images/hero.png'
import Body from '../assets/images/map.svg'
const Home = () => {
    return (
        <div className="w-full">
            <header className="max-container w-full h-svh flex justify-between items-center">
                <h2 className="font-bold">
                    Feel The Burn
                    <br />
                    Let <span className="text-primary">Sweat</span> Be Your
                    <br />
                    <span className="text-primary">Fat&nbsp;Crying</span>
                </h2>
                <img
                    src={Hero}
                    alt="exercising figure"
                    className="md:block hidden max-w-[450px] min-w-[30rem]"
                />
            </header>

            <section id="map" className='w-full px-custom bg-secondary py-[12rem]'> 
                <h3 className='text-primary font-semibold'>Exercise Map</h3>
                <p className='text-[2.2rem] tracking-tighter'>Click on the body parts to explore exercises tailored for each area</p>
                <img src={Body} alt="body figure" className='m-auto mt-[2rem]'/>
            </section>
        </div>
    )
}

export default Home
