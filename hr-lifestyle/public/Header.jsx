import Logo from './logo.svg'

function Header() {
    return (
        <section className="header" id="header">
            <a href="./index.html">
                <div className="logo-wrapper">
                    <img src={Logo} alt="logo" />
                </div>
            </a>

            <div className="nav-area">
                <div className="nav-links">

                <a href="./index.html">
                    <div className="link"><p>Home</p></div>
                </a>

                <a href="./about_us.html">
                    <div className="link"><p>About Us</p></div>
                </a>

                <a href="./services.html">
                    <div className="link"><p>Services</p></div>
                </a>

                <a href="./contact.html">
                    <div className="link"><p>Contact Us</p></div>
                </a>

            </div>

            <a href="./contact.html" className="btn">
                <button>CONNECT WITH US</button>
            </a>
        </div>

        <div className="menu-bar" id="menu">
            <i className="bi bi-list"></i>
        </div>
    </section>
    )
    
}

export default Header