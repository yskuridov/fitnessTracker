import { useRef, useState } from "react";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [validUsername, setValidUsername] = useState(true);
    const [validPassword, setValidPassword] = useState(true);

    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const onSubmit = (e) => {
        e.preventDefault();
        if (validateUsername() && validatePassword()) {
            // Proceed with login logic
            console.log("Login successful");
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
        <div className="mt-5 bg-dark text-light">
            <div className="text-center mb-4">
                <h1 className="mb-0 text-success">Connexion</h1>
            </div>

            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Nom d'utilisateur</label>
                    <input ref={usernameRef} id="username" className={`form-control ${!validUsername && 'is-invalid'} w-25 mx-auto`} type="text" placeholder="Nom d'utilisateur" value={username} onChange={(e) => setUsername(e.target.value)} />
                    {!validUsername && <div className="invalid-feedback">Le nom d'utilisateur doit être de 3 à 16 caractères alphanumériques.</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Mot de passe</label>
                    <input ref={passwordRef} id="password" className={`form-control ${!validPassword && 'is-invalid'} w-25 mx-auto`} type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {!validPassword && <div className="invalid-feedback">Le mot de passe doit contenir au moins une lettre majuscule et être de 8 à 20 caractères.</div>}
                </div>

                <button type="submit" className="btn btn-dark text-success border border-secondary  w-25 mx-auto">Se connecter</button>
            </form>
        </div>
    );
};

export default LoginForm;
