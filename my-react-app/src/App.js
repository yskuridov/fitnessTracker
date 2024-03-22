import './App.css';
import RegistrationForm from './components/auth/RegistrationForm';
import LoginForm from './components/auth/LoginForm';
import { Routes, Route } from "react-router-dom";
import ExercisesComponent from './components/exercises/ExercisesComponent';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/login"} element={<LoginForm/>}/>
        <Route path={"/register"} element={<RegistrationForm/>}/>
        <Route path={"/exercises"} element={<ExercisesComponent/>}/>
      </Routes>
    </div>
  );
}

export default App;
