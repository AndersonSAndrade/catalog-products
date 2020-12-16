import React from 'react';
import { useParams } from 'react-router-dom';
import ButtomReturn from '../../../../core/components/ButtomReturn';
import { ReactComponent as ProductImage} from '../../../../core/assets/images/computador.svg';

import './styles.scss';
import PriceProducts from '../PriceProduct';

type ParamsType = {
    productId: string
}


const ProductDetails = () => {
    const {productId} = useParams<ParamsType>();
    console.log(productId);
    return (
        <div className="container custom-container">
        <div className="card custom-card w-100">
        <div className="card-body">
            <div className="row mb-5">
                <ButtomReturn text="Voltar"/>
            </div>
           <div className="row">
               <div className="col-4 items-img-product">
                 <p><ProductImage className="img-product-details img-thumbnail"/></p>
                 <p className="text-product-details">Computador Desktop Dell Vostro 3681-M10</p>
                 <PriceProducts prices="2.610,00" />
               </div>
               <div className="col-8">
               <div className="card">
                <div className="card-body">
                    <p>Detalhe do Produto: </p>
                    <p className="p-product-details">
                    Compacto e repleto de recursos.
                    A marca Vostro foi desenvolvida para atender aos pequenos e médios empresários com produtos que possuem características ideais 
                    para quem precisa estar sempre em evolução, e agora está sendo disponibilizado também para a sua casa.
                    O Vostro Desktop é equipado com processadores de alta performance Intel® CoreTM de 10a geração, que é perfeito para potencializar 
                    todos os negócios. Trabalhe tranquilamente e troque suas tabs de forma ágil, com memória RAM de 4GB (expansível até 64GB). 
                    Salve e acesse apresentações, documentos e mídia sem se preocupar com falta de espaço com HD 1TB. Possui gravador e reprodutor 
                    de CD/DVD para a utilização de suas mídias. O Small Desktop é equipado com tecnologia wireless 802.11, que permite 
                    você conectar seu desktop em qualquer ambiente que tenha um roteador. Sem sacrificar os recursos e a performance, 
                    economize espaço na sua área de trabalho com este pequeno desktop, E ainda, para não atrapalhar os seus negócios, o 
                    novo sistema de ventilação e o filtro ultrafino foram criados para melhorar o fluxo de ar, reduzir a poeira e ajudar a manter 
                    o sistema refrigerado. Conta com diversos slots de expansibilidade para aprimorar a sua máquina conforme o seu negócio cresce.
                    </p>
                    
                </div>
                </div>
               </div>
           </div>
        </div>
        </div>
    </div>
    )
}

export default ProductDetails;