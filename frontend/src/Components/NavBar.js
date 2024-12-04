import '../Styles/Navbar.css'
function NavBar(){
    return(
        <nav className='navbar'>
            <ul>
                <li><a href="/">Find a Spot</a></li>
                <li><a href="/#/create">Create a Spot</a></li>
                <li><a href="/#/login">Login</a></li>
            </ul>
        </nav>
    );
}
export default NavBar;