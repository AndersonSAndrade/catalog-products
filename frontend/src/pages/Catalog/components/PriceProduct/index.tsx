import React from 'react'
import './styles.scss';

type Props = {
    prices: string
}

function PriceProducts({prices}: Props) {
    return (
        <div className="row product-type-items">
            <span className="product-type-price">R$</span>
            <span className="product-type-price-value">{prices}</span>
        </div>
    )
}

export default PriceProducts
