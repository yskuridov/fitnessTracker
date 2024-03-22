import './App.css';
import RegistrationForm from './components/auth/RegistrationForm';
import LoginForm from './components/auth/LoginForm';
import { Routes, Route } from "react-router-dom";
import ExercisesComponent from './components/exercises/ExercisesComponent';
import DashboardComponent from './components/Dashboard';

function App() {
  return (
    <div className="App bg-dark">
      <Routes>
        <Route path={"/login"} element={<LoginForm/>}/>
        <Route path={"/register"} element={<RegistrationForm/>}/>
        <Route path={"/exercises"} element={<ExercisesComponent/>}/>
        <Route path={"/dashboard"} element={<DashboardComponent/>}/>
      </Routes>
    </div>
  );
}

export default App;
