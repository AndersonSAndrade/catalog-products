import React from 'react';
import './styles.scss';
import { ReactComponent as MainImage} from 'core/assets/images/main-image.svg';
import ButtonIcon from 'core/components/ButtonIcon';

const Home = () => (

    <div className="container custom-container mb-">
        <div className="card custom-card w-100">
        <div className="card-body">
            <div className="row">
            <div className="col-6">
                <h2 className="card-title text-title">Conheça o melhor catálogo de produtos</h2>
                <p className="card-text text-subtitle">Ajudaremos você a encontrar os melhores produtos disponíveis no mercado.</p>
                <ButtonIcon text="INICIE AGORA A SUA BUSCA"/>
            </div>
            <div className="col-6 offcet-md-2">
                <MainImage className="main-image"/>
            </div>
            </div>
        </div>
        </div>
    </div>

)

export default Home;