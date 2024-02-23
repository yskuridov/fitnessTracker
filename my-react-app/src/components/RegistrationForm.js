import { useRef, useState } from "react";

const RegistrationForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userType, setUserType] = useState('');


    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    const userTypeRef = useRef(null);
    const showPasswordRef = useRef(null);
    const showPasswordConfirmationRef = useRef(null);

    const validUsername = username.match('^[a-zA-Z0-9_]{3,16}$');
    const validPassword = password.match('^(?=.*[A-Z])(.{8,20})$');

    const onSubmit = (e) => {
        e.preventDefault()
        if (validatePasswords() && validateUsername()) {

        }
    }

    function validateUsername() {
        let isValid = true;

        if (!username) {
            isValid = false;
        }

        if (
            username.trim() === ''
        ) {
            isValid = false;
            usernameRef.current.innerHTML = '* Veuillez indiquer un nom d\'utilisateur *';
        } else {
            usernameRef.current.innerHTML = '';
        }

        if (username.trim() !== '' || !validUsername) {
            isValid = false;
            usernameRef.current.innerHTML = '* Le nom d\'utilisateur doit être de 3 à 16 caractères et ne peut pas avoir de signes spéciaux *'
        } else {
            usernameRef.current.innerHTML = '';
        }
        return isValid;
    }

    function validatePasswords() {
        let isValid = true;

        if (
            !password ||
            !confirmPassword
        ) {
            isValid = false;
        }
        if (password.trim() === '') {
            isValid = false;
            passwordRef.current.innerHTML = '* Veuillez indiquer un mot de passe *'
        } else {
            passwordRef.current.innerHTML = '';
        }

        if (confirmPassword.trim() === '') {
            isValid = false;
            confirmPasswordRef.current.innerHTML = '* Veuillez entrer la confirmation du mot de passe *'
        } else {
            confirmPasswordRef.current.innerHTML = '';
        }

        if (password.trim() !== '' && !validPassword) {
            isValid = false;
            passwordRef.current.innerHTML = '* Le mot de passe doit être entre 8 et 20 caractères et contenir 1 caractère en majuscule *'
        } else {
            passwordRef.current.innerHTML = '';
        }

        if (confirmPassword.trim() !== '' && password.trim() !== '' && confirmPassword !== password) {
            isValid = false;
            confirmPasswordRef.current.innerHTML = '* La confirmation est différente du mot de passe *'
        } else {
            confirmPasswordRef.current.innerHTML = '';
        }

        return isValid;
    }

    function showPassword() {
        if (showPasswordRef.current.type === "password") {
            showPasswordRef.current.type = "text";
        } else {
            showPasswordRef.current.type = "password";
        }
        if (showPasswordConfirmationRef.current.type === "password") {
            showPasswordConfirmationRef.current.type = "text";
        } else {
            showPasswordConfirmationRef.current.type = "password";
        }
    }

    return (
        <div>
            <div>
                <div className="bg-dark text-light">
                    <form onSubmit={onSubmit} className="container-md mt-5">
                        <div className="mb-4">
                            <h1 className="mb-0 text-success">Inscription</h1>
                        </div>

                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="username" className="form-label">Nom d'utilisateur</label>
                                <input ref={usernameRef} id="username" className="form-control w-50 mx-auto" type="text" placeholder="Nom d'utilisateur" value={username} onChange={(e) => setUsername(e.target.value)} />
                                <p ref={usernameRef} className="font px-1 text-danger"></p>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="password" className="form-label">Mot de passe</label>
                                <input ref={showPasswordRef} id="password" className="form-control" type="password" placeholder="Entrez le mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <p ref={passwordRef} className="font px-1 text-danger"></p>
                            </div>
                            <div className="col">
                                <label htmlFor="confirmPassword" className="form-label">Confirmation du mot de passe</label>
                                <input ref={showPasswordConfirmationRef} id="confirmPassword" className="form-control" type="password" placeholder="Confirmez le mot de passe" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                <p ref={confirmPasswordRef} className="font px-1 text-danger"></p>
                            </div>
                            <div className="col-1 mt-2">
                                <button onClick={showPassword} className="btn btn-success border border-secondary text-dark btn-md mt-4 p-1 w-100">Afficher</button>
                            </div>
                        </div>


                        <button type="submit" className="btn btn-dark border border-secondary text-success btn-lg w-25">S'inscrire</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegistrationForm