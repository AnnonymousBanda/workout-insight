import { Link } from 'react-router-dom'
const NotFound = () => {
    console.log("Not found rendered")
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-bg-primary text-text">
            <div className="max-container text-center px-custom">
                <h2 className="text-primary mb-4">404</h2>
                <h3 className="mb-2 font-semibold">Page Not Found</h3>
                <p className="mb-6 text-[1.6rem] tracking-tighter">
                    The page you are looking for doesn't exist or has been
                    removed.
                </p>
                <Link to="/">
                    <button className="bg-primary text-bg-primary py-[1rem] px-[1.5rem] rounded-lg">
                        Go to Homepage
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default NotFound
