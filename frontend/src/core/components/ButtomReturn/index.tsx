import React from 'react';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

type Props = {
    text: string
}

const ButtomReturn = ({text}: Props) => (
         <Link to="/products" className="btn-group btn-link" role="group">
            <span className="btn btn-lighg"><FontAwesomeIcon icon={faChevronLeft} /></span>
            <span className="btn btn-lighg font-weight-bold text-uppercase">{text}</span>
        </Link>
)

export default ButtomReturn;