import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import './styles.scss';

const Catalog = () => (

    <div className="container custom-container">
    <div className="title">
        <h4>Pesquisar</h4>
    </div>
    <div className="products-list">
        <Link to="/products/1" className="btn-link">
            <ProductCard title="Computador Desktop Dell Vostro 3681-M10" price="2.600,10"/>
        </Link>
        <Link to="/products/2" className="btn-link">
            <ProductCard title="Computador Desktop Dell Vostro 3681-M10" price="2.600,10"/>
        </Link>
        <Link to="/products/3" className="btn-link">
            <ProductCard title="Computador Desktop Dell Vostro 3681-M10" price="2.600,10"/>
        </Link>
        <Link to="/products/4" className="btn-link">
            <ProductCard title="Computador Desktop Dell Vostro 3681-M10" price="2.600,10"/>
        </Link>
        <Link to="/products/5" className="btn-link">
            <ProductCard title="Computador Desktop Dell Vostro 3681-M10" price="2.600,10"/>
        </Link>
        <Link to="/products/6" className="btn-link">
            <ProductCard title="Computador Desktop Dell Vostro 3681-M10" price="2.600,10"/>
        </Link>
        <Link to="/products/7" className="btn-link">
            <ProductCard title="Computador Desktop Dell Vostro 3681-M10" price="2.600,10"/>
        </Link>
        <Link to="/products/8" className="btn-link">
            <ProductCard title="Computador Desktop Dell Vostro 3681-M10" price="2.600,10"/>
        </Link>
        <Link to="/products/9" className="btn-link">
            <ProductCard title="Computador Desktop Dell Vostro 3681-M10" price="2.600,10"/>
        </Link>
        <Link to="/products/10" className="btn-link">
            <ProductCard title="Computador Desktop Dell Vostro 3681-M10" price="2.600,10"/>
        </Link>
        
    </div>
</div>

)

export default Catalog;