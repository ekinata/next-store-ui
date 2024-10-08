import { faBars, faMagnifyingGlass, faMoon, faSun, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

export default function Navbar() {

    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        setTheme(localStorage.getItem('theme') as 'light' | 'dark' || 'light');
    }, []);

    const toggleTheme = () => {
        if (document.documentElement.getAttribute('data-theme') === 'light') {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            setTheme('dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            setTheme('light');
        }
    };

    return (
        <>
            <div className="container bg-dark fixed-top nav-bar">
                <div className="row">
                    <div className="col-12 d-flex justify-content-between align-items-center p-3 py-3">
                        <span className="h2 text-white">
                            MyStore
                        </span>
                        <div className="input-group w-25">
                            <input type="text" className="form-control bg-transparent text-white border-warning border-1" />
                            <button className="btn btn-outline-warning border-1">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                        <span>
                            <button className="btn btn-outline-warning border-1 mx-1">
                                <FontAwesomeIcon icon={faUser} />
                            </button>
                            <button className="btn btn-outline-warning border-1 mx-1">
                                <FontAwesomeIcon icon={faBars} />
                            </button>
                            <button className="btn btn-outline-warning border-1 mx-1" onClick={toggleTheme}>
                                <FontAwesomeIcon icon={(theme === "light") ? faMoon : faSun} />
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
