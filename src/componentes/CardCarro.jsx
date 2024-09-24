
import PropTypes from 'prop-types';
import '../Styles/CardCarro.css'
import { useState } from 'react';
import Compra from '../componentes/Compra'
import Especificacoes from './Especificacoes';

function CardCarro({carros,id,marca,modelo,cor,ano,imgSrc,excluirCarro, addCarro}){

    const [apagar,setApagar] = useState(false);
    const [Comprou,setComprou] = useState(false);

    return(
        <div className='divMainCardCarro'>            
            <div className={Comprou ? 'divCardBlur' : 'cardDiv'}>
                {apagar ? 
                    <div className='divConfirmedExcluir'>
                        <span>você tem certeza que quer excluir?</span> 
                        <button onClick={() => excluirCarro(id)}>excluir</button> 
                    </div> :
                     <button className='buttonFechar' onClick={() => setApagar(true)}>fechar</button> 
                }
                 <div className='divImage'>
                        {imgSrc != null && imgSrc != "" ? <img src={imgSrc} alt="" /> : "Não tem imagem" }
                </div>
                <Especificacoes marca={marca} modelo={modelo} cor={cor} ano={ano}/>
                <button onClick={() => setComprou(true)}>Comprar</button>
            </div> 

            <div>
                {Comprou && <Compra carros={carros} addCarro={addCarro} id={id} setComprou={setComprou}/>}
            </div>   
        </div>        

    )
}


CardCarro.propTypes = {
    marca: PropTypes.string.isRequired,
    modelo: PropTypes.string.isRequired,
    cor: PropTypes.string.isRequired,
    ano: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    id:PropTypes.string.isRequired,
    excluirCarro: PropTypes.func.isRequired,
    carros:PropTypes.array.isRequired,
    addCarro:PropTypes.func.isRequired
}



export default CardCarro;