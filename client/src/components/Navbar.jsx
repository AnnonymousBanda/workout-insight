import { Link } from 'react-router-dom'
import Logo from '../assets/images/Logo.png'

const Navbar = () => {
    return (
        <div className="w-full border-b-[0.05rem] border-[rgba(0,0,0,0.3)] absolute">
            <nav className="max-container w-full py-[10px] flex items-center justify-between">
                <Link to="/">
                    <img src={Logo} alt="site logo" />
                </Link>
                <div className="flex md:gap-[10rem] sm:gap-[7rem] l:gap-[5rem] gap-[3rem]">
                    <a href="#home" className="text-[2rem] text-primary">
                        Home
                    </a>
                    <a href="#exercise" className="text-[2rem] text-primary">
                        Exercise
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
