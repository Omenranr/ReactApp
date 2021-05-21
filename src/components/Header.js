function Header(props) {
    console.log(props)
    const {welcomeMessage} = props
    return (
        <div>
            <h1>{welcomeMessage}</h1>
        </div>
    );
}

export default Header;
