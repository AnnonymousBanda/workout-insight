import Hero from '../assets/images/hero.png'

const Header = () => {
    return (
        <header className="max-container w-full h-svh flex justify-between items-center">
            <h1 className="font-bold">
                Feel The Burn
                <br />
                <span className="text-primary">Sweat</span> is
                <br />
                <span className="text-primary">Fat&nbsp;Crying</span>
            </h1>
            <img
                src={Hero}
                alt="exercising figure"
                className="md:block hidden max-w-[450px] min-w-[30rem]"
            />
        </header>
    )
}

export default Header
