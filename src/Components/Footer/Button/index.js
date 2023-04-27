const Button = ({loggedIn, toggleLoggedIn}) => {
    return (
        <button onClick={toggleLoggedIn}>
            {loggedIn ? 'Logout' : 'Login'}
        </button>
    )
}

export default Button
