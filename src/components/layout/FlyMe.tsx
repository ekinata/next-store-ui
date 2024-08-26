import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'

export default function FlyMe() {

    const [show, setShow] = React.useState(false);

    const handleFlyMe = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setShow(true);
            } else {
                setShow(false);
            }
        });
    }, []);

    return (
        <>
            {
                show && (
                    <div className='fixed-bottom-right'>
                        <button className='btn btn-warning' onClick={handleFlyMe}>
                            <FontAwesomeIcon icon={faArrowUp} />
                        </button>
                    </div>
                )
            }
        </>
    )
}
