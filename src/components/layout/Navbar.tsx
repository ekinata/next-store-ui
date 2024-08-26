import { faBars, faMagnifyingGlass, faMoon, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

export default function Navbar() {

    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (prefersDarkScheme) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, []);

    const toggleTheme = () => {
        if (document.documentElement.getAttribute('data-theme') === 'light') {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <>
            <div className="container bg-dark fixed-top">
                <div className="row">
                    <div className="col-12 d-flex justify-content-between align-items-center p-4">
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
                            <button className="btn btn-outline-warning border-1">
                                <FontAwesomeIcon icon={faBars} />
                            </button>
                            <button className="btn btn-outline-warning border-1" onClick={toggleTheme}>
                                <FontAwesomeIcon icon={faMoon} />
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
