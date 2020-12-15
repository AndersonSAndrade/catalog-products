import React from 'react';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faChevronRight } from '@fortawesome/free-solid-svg-icons'


const ButtonIcon = () => (
    <div className="btn-group" role="group">
        <button type="button" className="btn btn-primary">INICIE AGORA A SUA BUSCA</button>
        <button type="button" className="btn btn-primary">
           <FontAwesomeIcon icon={faChevronRight} />
        </button>
    </div>
)

export default ButtonIcon;