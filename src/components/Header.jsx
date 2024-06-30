function Header () {
    return (
        <nav className="lime lighten-1">
        <div className="nav-wrapper">
        <a href="#" className="brand-logo">React Online Shop</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="https://github.com/Wowanderful">GitHub</a></li>
            <li><a href="https://wowanderful.github.io/">Wowanderful</a></li>
            <li><a href="mailto:wowanderful@gmail.com">E-mail me</a></li>
        </ul>
        </div>
        </nav>
    );
}

export { Header }