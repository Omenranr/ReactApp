import './App.css';
import {Body, Header, Footer} from './components'

function App() {
  let welcomeMessage = "Welcome to my websit"
  return (
    <div className="App">
      <Header welcomeMessage={welcomeMessage}/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
