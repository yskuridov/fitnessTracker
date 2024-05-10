import './App.css';
import RegistrationForm from './components/auth/RegistrationForm';
import LoginForm from './components/auth/LoginForm';
import { Routes, Route } from "react-router-dom";
import ExercisesComponent from './components/exercises/ExercisesComponent';
import DashboardComponent from './components/scrollbar/Dashboard';
import FoodsComponent from './components/food/FoodsComponent';

function App() {
  return (
    <div className="App bg-dark">
      <Routes>
        <Route path={"/login"} element={<LoginForm/>}/>
        <Route path={"/register"} element={<RegistrationForm/>}/>
        <Route path={"/exercises"} element={<ExercisesComponent/>}/>
        <Route path={"/dashboard"} element={<DashboardComponent/>}/>
        <Route path={"/meals"} element={<FoodsComponent/>}/>
      </Routes>
    </div>
  );
}

export default App;
