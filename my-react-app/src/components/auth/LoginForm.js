import React, { useRef, useState, useEffect } from "react";
import { useUser } from "../../provider/UserProvider";
import UserService from "../../service/UserService";
import { useNavigate } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';


const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [validUsername, setValidUsername] = useState(true);
    const [validPassword, setValidPassword] = useState(true);
    const [error, setError] = useState(null);
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const { loggedInUser, setLoggedInUser } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (loggedInUser) {
            navigate('/exercises')
        }
    }, [loggedInUser]);

    const onSubmit = async (e) => {
        e.preventDefault();
        if (validateUsername() && validatePassword()) {
            try {
                const response = await UserService.login({ "username": username, "password": password });
                if (response != null) {
                    setLoggedInUser(response);
                }
            } catch (error) {
                setError("Connexion échouée. Veuillez vérifier vos informations.");
            }
        }
    };

    const validateUsername = () => {
        if (!username) {
            setValidUsername(false);
            return false;
        }

        if (!username.match('^[a-zA-Z0-9_]{3,16}$')) {
            setValidUsername(false);
            return false;
        }

        setValidUsername(true);
        return true;
    };

    const validatePassword = () => {
        if (!password) {
            setValidPassword(false);
            return false;
        }

        if (!password.match('^(?=.*[A-Z])(.{8,20})$')) {
            setValidPassword(false);
            return false;
        }

        setValidPassword(true);
        return true;
    };

    return (
        <div className="container d-flex justify-content-center align-items-stretch vh-100">
            <div className="bg-dark text-light p-5 rounded">
                <div className="text-center">
                    <h1 className="mb-5 text-success">Page de connexion</h1>
                </div>

                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Nom d'utilisateur</label>
                        <input ref={usernameRef} id="username" className={`form-control ${!validUsername && 'is-invalid'}`} type="text" placeholder="Nom d'utilisateur" value={username} onChange={(e) => setUsername(e.target.value)} />
                        {!validUsername && <div className="invalid-feedback">Le nom d'utilisateur doit être de 3 à 16 caractères alphanumériques.</div>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="form-label">Mot de passe</label>
                        <input ref={passwordRef} id="password" className={`form-control ${!validPassword && 'is-invalid'}`} type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
                        {!validPassword && <div className="invalid-feedback">Le mot de passe doit contenir au moins une lettre majuscule et être de 8 à 20 caractères.</div>}
                    </div>

                    <button type="submit" className="btn btn-dark text-success border border-secondary w-100 mt-3">Se connecter</button>
                    {error && <div className="text-danger mt-2 text-center">{error}</div>}
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
