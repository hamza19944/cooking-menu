function Header() {
    return (
        <div className="header">
            <h1>Cooking Menu</h1>
            <ul>
                <li className="active"><a href="/">Home</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">About</a></li>
            </ul>
        </div>
    )
}

export default Header;