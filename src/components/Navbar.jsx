import { Link } from 'react-router-dom'
import Logo from '../assets/images/Logo.png'

const Navbar = () => {
    return (
        <div className='w-full border-b-[0.05rem] border-[rgba(0,0,0,0.3)] absolute'>
            <nav className='max-container w-full py-[10px] flex items-center justify-between'>
                <Link to="/" >
                    <img src={Logo} alt="site logo" />
                </Link>
                <Link>
                    <button className='bg-primary text-white'>Dive in</button>
                </Link>
            </nav>
        </div>
    )
}

export default Navbar
