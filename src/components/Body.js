import { useState } from 'react';
import {LoginForm, AdminPanel} from './Login'

function Body() {
    const [formState, setFormState] = useState({
        username: "",
        password: "",
    })
    const [logged, setLogged] = useState(false)

    const handleLogout = (event) => {
        setLogged(false)
    }

    const validateForm = () => {
        const {username, password} = formState
        //...
    }

    const handleLogin = (event) => {
        event.preventDefault()
        console.log(event)
        let form = event.target
        let username = form.username.value
        let password = form.password.value
        setFormState({
            username: username,
            password: password
        })
        validate_form()
        if(password === "admin") {
            setLogged(true)
        }
    }

    return (
      <div>
          <h2>Login Form</h2>
          {logged ? <AdminPanel handleLogout={handleLogout}/> : <LoginForm handleLogin={handleLogin}/>}
      </div>
  );
}

export default Body;

/*
1. Validation du formulaire (présence, ...)
2. Enrichir les composantes (AdminPanel, LoginForm (email, ...))
3. S'exercer avec le changement d'état (useState, setState)
*/
