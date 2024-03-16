import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div>
            <div>
                <div className="hero " style={{ backgroundImage: 'url(https://i.imgur.com/9KsFivT.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <footer className="footer p-10 text-white t">
                        <aside>
                            <img src={logo} alt="" className="w-20" />
                            <p className="font-bold text-lg">Royal <span className="text-btnColor">Oasis</span> </p>
                        </aside>
                        <nav>
                            <header className="footer-title">Services</header>
                            <a className="link link-hover">Branding</a>
                            <a className="link link-hover">Design</a>
                            <a className="link link-hover">Marketing</a>
                            <a className="link link-hover">Advertisement</a>
                        </nav>
                        <nav>
                            <header className="footer-title">Company</header>
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <a className="link link-hover">Press kit</a>
                        </nav>
                        <nav>
                            <header className="footer-title">Legal</header>
                            <a className="link link-hover">Terms of use</a>
                            <a className="link link-hover">Privacy policy</a>
                            <a className="link link-hover">Cookie policy</a>
                        </nav>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Footer;