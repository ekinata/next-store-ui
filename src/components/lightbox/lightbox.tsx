import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';

export default function Lightbox() {
  

    const {isOpen,content} = useSelector((state: RootState) => state.lightboxReducer);
    const dispatch: AppDispatch = useDispatch();

    const handleClose = () => {
        dispatch({ type: 'CLOSE_LIGHTBOX' });
    }

    if (!isOpen) return null;
    
    return (
        <div className='lightbox-container'>
            <div className='lightbox-content'>
                <div className='lightbox-close'>
                    <FontAwesomeIcon icon={faTimes} onClick={handleClose}/>
                </div>
                <img src={content} alt='lightbox' />
            </div>
        </div>
    )
}
