function Header(props) {
    console.log(props)
    const {handleLogout} = props
    return (
        <div>
            <h1>Welcome to the admin panel</h1>
            <p>Secret informations</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Header;
