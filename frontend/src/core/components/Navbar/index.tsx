import React from 'react';
import './styles.scss';

const Navbar = () => (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary main-nav">
            <div className="col-2">
                <a className="navbar-brand" href="#"><strong>DS Catalog</strong></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="col-6 offset-3">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">HOME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">CATÁLOGO</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">ADMIN</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
);

export default Navbar;