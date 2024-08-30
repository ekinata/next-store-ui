import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Carousel() {
  return (
    <div className='container'>
        <div className='row my-5'>
            <div className="col-md-4">
                <div className="card">
                    <img src="https://placehold.co/600x400" alt="Placeholder" />
                    <div className="card-body">
                        <h5 className="card-title">Card Title</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <a href="#" className="btn btn-outline-warning">Read More <FontAwesomeIcon icon={faArrowRight}/></a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <img src="https://placehold.co/600x400" alt="Placeholder" />
                    <div className="card-body">
                        <h5 className="card-title">Card Title</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <a href="#" className="btn btn-outline-warning">Read More <FontAwesomeIcon icon={faArrowRight}/></a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <img src="https://placehold.co/600x400" alt="Placeholder" />
                    <div className="card-body">
                        <h5 className="card-title">Card Title</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <a href="#" className="btn btn-outline-warning">Read More <FontAwesomeIcon icon={faArrowRight}/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
