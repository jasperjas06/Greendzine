
import './App.css';
import {useNavigate} from "react-router-dom"
function App() {
  const navigate = useNavigate()
  const handleSubmit = () =>{
    navigate('/home')
  }
  return (
    // <div className="App">
    <header className="App-header">
    <img src='./logo.png' alt='logo' height={120} width={120}/>
    <p>#We are Electric</p>
    <br/>
    <br/>
    <div className='login-form'>

      <input placeholder='Email' />

      <input placeholder='Password'/>
      <br/>
      <button onClick={handleSubmit}>
      Login
      </button>
      </div>
      <br/>
      <label>Forgot Password?</label>
      </header>

    // </div>
  );
}

export default App;
