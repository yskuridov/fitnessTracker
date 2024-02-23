import logo from './logo.svg';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <LoginForm/>
      <RegistrationForm/>
    </div>
  );
}

export default App;
