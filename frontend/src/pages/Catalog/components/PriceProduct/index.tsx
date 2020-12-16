import React from 'react'
import './styles.scss';

type Props = {
    prices: number
}

const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {minimumFractionDigits: 2}).format(price);
}

function PriceProducts({prices}: Props) {
    return (
        <div className="row product-type-items">
            <span className="product-type-price">R$</span>
            <span className="product-type-price-value">{formatPrice(prices)}</span>
        </div>
    )
}

export default PriceProducts
