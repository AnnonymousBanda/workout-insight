import { Link } from 'react-router-dom'
import Logo from '../assets/images/Logo.png'

const Navbar = () => {
    return (
        <div className="w-full border-b-[0.05rem] border-[rgba(0,0,0,0.3)] absolute">
            <nav className="max-container w-full py-[10px] flex items-center justify-between">
                <Link to="/">
                    <img src={Logo} alt="site logo" />
                </Link>
                <div className="flex gap-[5rem]">
                    <a
                        href="#home"
                        className="text-primary font-semibold text-[2rem]"
                    >
                        Home
                    </a>
                    <a
                        href="#exercise"
                        className="text-primary font-semibold text-[2rem]"
                    >
                        Exercise
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
