import React from 'react';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

type Props = {
    text: string
}

const ButtonIcon = ({text}: Props) => (
         <Link to="/products" className="btn-group btn-link" role="group">
            <span className="btn btn-info">{text}</span>
            <span className="btn btn-primary"><FontAwesomeIcon icon={faChevronRight} /></span>
        </Link>
)

export default ButtonIcon;