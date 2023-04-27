const Button = ({loggedIn, toggleLoggedIn}) => {
    return (
        <button>
            {loggedIn ? 'Logout' : 'Login'}
        </button>
    )
}

export default Button