const Header = ({loggedIn}) => {
    return (
        <div>
            Header
        {loggedIn ? 'Welcome back!' : 'Welcome stranger!'}
        </div>
    )
}

export default Header