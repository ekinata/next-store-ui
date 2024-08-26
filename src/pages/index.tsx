import { faBars, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Home(): JSX.Element {
  return (
    <>
      <div className="container bg-dark">
        <div className="row">
          <div className="col-12 d-flex justify-content-between align-items-center p-4">
            <span className="h3">
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
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
