import React from 'react';
import ProductCard from './components/ProductCard';
import './styles.scss';

const Catalog = () => (

    <div className="container custom-container">
    <div className="title">
        <h4>Pesquisar</h4>
    </div>
    <div className="products-list">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
    </div>
</div>

)

export default Catalog;