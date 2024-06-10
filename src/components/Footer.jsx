const Footer = () => {
    return (
        <div className="w-full bg-bg-secondary">
            <footer className="max-container w-full bg-bg-secondary py-[5rem] flex flex-col align items-center justify-center gap-[5rem]"> {/*absolute bottom-[800px]*/}
                <div className="w-full flex align items-start justify-around">
                    <div>
                        <h4>GET IN TOUCH</h4>
                        <ul className="text-[1.6rem] text-center">
                            <li>
                                <a href="mailto:annonymous007banda@gmail.com">
                                    Email
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/AnnonymousBanda">
                                    Github
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/Annonym_usBanda">
                                    Twitter
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>EXPLORE</h4>
                        <ul className="text-[1.6rem] text-center">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#map">Dive in</a></li>
                        </ul>
                    </div>
                </div>
                <p className="text-center text-[1.4rem]">
                    &copy; 2024 AnnonymousBanda <br /> All rights reserved.
                </p>
            </footer>
        </div>
    )
}

export default Footer
