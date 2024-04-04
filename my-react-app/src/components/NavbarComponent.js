import React from 'react';
import { useUser } from '../provider/UserProvider';
import { useNavigate } from 'react-router-dom';

const NavbarComponent = () => {
    const { loggedInUser } = useUser();
    const navigate = useNavigate();

    let isLoggedIn = loggedInUser === null ? false : true;

    return (
        <nav className="navbar navbar-dark bg-secondary">
            <div className="container-fluid">
                <a className="navbar-brand text-sm" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                    Fitplanet
                </a>
                <div className="d-flex text-dark fw-bold fs-6">
                    {isLoggedIn ? (
                        <>
                            <div className="nav-item me-3">
                                <a className="nav-link" onClick={() => navigate('/exercises')} style={{ cursor: 'pointer' }}>
                                    Exercices
                                </a>
                            </div>
                            <div className="nav-item me-3">
                                <a className="nav-link" onClick={() => navigate('/meals')} style={{ cursor: 'pointer' }}>
                                    Repas
                                </a>
                            </div>
                            <div className="nav-item me-3">
                                <a className="nav-link" onClick={() => navigate('/dashboard')} style={{ cursor: 'pointer' }}>
                                    Tableau de bord
                                </a>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="nav-item me-3">
                                <a className="nav-link" onClick={() => navigate('/login')} style={{ cursor: 'pointer' }}>
                                    Connexion
                                </a>
                            </div>
                            <div className="nav-item me-3">
                                <a className="nav-link" onClick={() => navigate('/register')} style={{ cursor: 'pointer' }}>
                                    Inscription
                                </a>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavbarComponent;
