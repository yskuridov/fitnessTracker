import './App.css';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/login"} element={<LoginForm />}></Route>
        <Route path={"/register"} element={<RegistrationForm />}></Route>
        <Route path={"/dashboard"}></Route>
      </Routes>
      <LoginForm />
      <RegistrationForm />
    </div>
  );
}

export default App;
