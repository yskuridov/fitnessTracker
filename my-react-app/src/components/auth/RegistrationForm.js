import { useRef, useState } from "react";
import UserService from "../../service/UserService";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('Male');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bodyType, setBodyType] = useState('');
    const [goal, setGoal] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    const showPasswordRef = useRef(null);
    const showPasswordConfirmationRef = useRef(null);

    const validUsername = username.match('^[a-zA-Z0-9_]{3,16}$');
    const validPassword = password.match('^(?=.*[A-Z])(.{8,20})$');

    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        if (validatePasswords() && validateUsername()) {
            try {
                await UserService.register({ "username": username, "password": password, "age": age, "gender": gender, "weight": weight, "height": height, "bodyType": bodyType, "objective": goal });
                navigate('/login')
            } catch (error) {
                console.error("Error occurred during registration:", error);
            }
        }
    }

    function validateUsername() {
        let isValid = true;

        if (username.trim() === '') {
            isValid = false;
            usernameRef.current.innerHTML = '* Veuillez indiquer un nom d\'utilisateur *';
        } else {
            usernameRef.current.innerHTML = '';
        }

        if (!validUsername) {
            isValid = false;
            usernameRef.current.innerHTML = '* Le nom d\'utilisateur doit être de 3 à 16 caractères et ne peut pas avoir de signes spéciaux *'
        } else {
            usernameRef.current.innerHTML = '';
        }
        return isValid;
    }

    function validatePasswords() {
        let isValid = true;

        if (!password || !confirmPassword) {
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

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const bodyTypeDescriptions = {
        'Ectomorph': 'Mince, Maigre, Difficulté à développer les muscles',
        'Mesomorph': 'Musclé, Athlétique, Développe facilement les muscles',
        'Endomorph': 'Rond, Doux, Prend facilement du poids gras'
    };


    return (
        <div>
            <div>
                <div className="bg-dark text-light container d-flex justify-content-center align-items-stretch vh-100">
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
                                <input ref={showPasswordRef} id="password" className="form-control" type={showPassword ? "text" : "password"} placeholder="Entrez le mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <p ref={passwordRef} className="font px-1 text-danger"></p>
                            </div>
                            <div className="col-1 mt-2">
                                <button onClick={togglePasswordVisibility} type="button" className="btn btn-success border border-secondary text-dark btn-md mt-4 p-1 w-100">Afficher</button>
                            </div>
                            <div className="col">
                                <label htmlFor="confirmPassword" className="form-label">Confirmation du mot de passe</label>
                                <input ref={showPasswordConfirmationRef} id="confirmPassword" className="form-control" type={showPassword ? "text" : "password"} placeholder="Confirmez le mot de passe" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                <p ref={confirmPasswordRef} className="font px-1 text-danger"></p>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="age" className="form-label">Âge</label>
                                <input id="age" className="form-control" type="number" placeholder="Entrez votre âge" value={age} onChange={(e) => setAge(e.target.value)} />
                            </div>
                            <div className="col">
                                <label htmlFor="height" className="form-label">Poids (en kg)</label>
                                <input id="weight" className="form-control" type="number" placeholder="Entrez votre poids" value={weight} onChange={(e) => setWeight(e.target.value)} />
                            </div>
                            <div className="col">
                                <label htmlFor="height" className="form-label">Taille (en cm)</label>
                                <input id="height" className="form-control" type="number" placeholder="Entrez votre taille" value={height} onChange={(e) => setHeight(e.target.value)} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="gender" className="form-label">Sexe</label>
                                <select className="form-select" id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                                    <option value="Male">Homme</option>
                                    <option value="Female">Femme</option>
                                </select>
                            </div>
                            <div className="col">
                                <label htmlFor="bodyType" className="form-label">Type de corps</label>
                                <select className="form-select" id="bodyType" value={bodyType} onChange={(e) => setBodyType(e.target.value)}>
                                    <option value="">Sélectionnez un type de corps</option>
                                    <option value="Ectomorph">Ectomorphe</option>
                                    <option value="Mesomorph">Mésomorphe</option>
                                    <option value="Endomorph">Endomorphe</option>
                                </select>
                                {bodyType && (
                                    <p className="text-success text-warning font">*{bodyTypeDescriptions[bodyType]}</p>
                                )}
                            </div>
                            <div className="col">
                                <label htmlFor="goal" className="form-label">Objectif</label>
                                <select className="form-select" id="goal" value={goal} onChange={(e) => setGoal(e.target.value)}>
                                    <option value="">Sélectionnez un objectif</option>
                                    <option value="LoseWeight">Perte de poids</option>
                                    <option value="MaintainWeight">Maintien du poids</option>
                                    <option value="GainWeight">Prise de masse</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-dark border border-secondary text-success btn-lg w-25">S'inscrire</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegistrationForm;
