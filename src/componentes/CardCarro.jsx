
import PropTypes from 'prop-types';
import '../Styles/CardCarro.css'
import { useState } from 'react';
import Compra from '../componentes/Compra'
import Especificacoes from './Especificacoes';

function CardCarro({carros,id,marca,modelo,cor,ano,imgSrc,excluirCarro,dono,cpf,setCarros}){

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
                <Especificacoes marca={marca} modelo={modelo} cor={cor} ano={ano} dono={dono} cpf={cpf} />
                {cpf != null && dono != null ? null : <button onClick={() => setComprou(true)}>Comprar</button> }
                
            </div> 

            <div>
                {Comprou && <Compra excluirCarro={excluirCarro} 
                                    carros={carros} 
                                    id={id} 
                                    setComprou={setComprou}
                                    setCarros={setCarros}/>}
            </div>   
        </div>        

    )
}


CardCarro.propTypes = {
    marca: PropTypes.string.isRequired,
    modelo: PropTypes.string.isRequired,
    cor: PropTypes.string.isRequired,
    ano: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
    id:PropTypes.string.isRequired,
    excluirCarro: PropTypes.func.isRequired,
    carros:PropTypes.array.isRequired,
    setCarros:PropTypes.func.isRequired,
    dono:PropTypes.string,
    cpf:PropTypes.string
}



export default CardCarro;