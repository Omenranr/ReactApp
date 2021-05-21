function LoginForm(props) {
    const {handleLogin} = props
    return (
        <div>
            <form onSubmit={handleLogin}>
                <input name="username" type="text" placeholder="username"/>
                <input name="password" type="password" placeholder="your password"/>
                <input type="submit" value="Login"/>
            </form>
        </div>
    );
  }
  
  export default LoginForm;
  