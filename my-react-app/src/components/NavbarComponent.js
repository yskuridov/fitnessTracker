import React from 'react';
import { useUser } from '../provider/UserProvider';
import { useNavigate } from 'react-router-dom';

const NavbarComponent = () => {
    const { loggedInUser, setLoggedInUser } = useUser();
    const navigate = useNavigate();

    let isLoggedIn = loggedInUser === null ? false : true;

    const handleLogout = () => {
        setLoggedInUser(null);
        navigate('/login');
    };

    return (
        <nav className="navbar navbar-dark bg-secondary">
            <div className="container-fluid">
                <a className="navbar-brand text-sm text-info" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
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
                            <div className="nav-item me-3">
                                <button onClick={handleLogout} className='btn btn-sm nav-link text-danger'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
                                    <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                                </svg></button>
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
