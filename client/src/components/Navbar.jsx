import { Link } from 'react-router-dom'
import Logo from '../assets/images/Logo.png'

const Navbar = ({ exerciseRef }) => {
    const handleScroll = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div className="w-full border-b-[0.05rem] border-[rgba(0,0,0,0.3)] absolute">
            <nav className="max-container w-full py-[10px] flex items-center justify-between">
                <Link to="/">
                    <img src={Logo} alt="site logo" />
                </Link>
                <div className="flex md:gap-[10rem] sm:gap-[7rem] l:gap-[5rem] gap-[3rem]">
                    <Link to="/" className="text-[2rem] text-primary">
                        Home
                    </Link>
                    <a
                        href="#exercise"
                        className="text-[2rem] text-primary"
                        onClick={(e) => {
                            e.preventDefault()
                            handleScroll(exerciseRef)
                        }}
                    >
                        Exercise
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
