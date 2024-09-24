
import PropTypes from 'prop-types';
import '../Styles/CardCarro.css'
import { useState } from 'react';
import Compra from '../componentes/Compra'

function CardCarro({id,marca,modelo,cor,ano, imgSrc, excluirCarro}){

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

                <div>
                   
                    <div className='divInfo'>
                        <label htmlFor="">Marca:</label>
                        <p>{marca}</p>
                    </div>

                    <div className='divInfo' >
                        <label htmlFor="">Modelo:</label>
                        <p>{modelo}</p>
                    </div>

                    <div className='divInfo' >
                        <label htmlFor="">Cor:</label>
                        <p>{cor}</p>
                    </div>

                    <div className='divInfo'  >
                        <label htmlFor="">Ano:</label>
                        <p>{ano}</p>
                </div>
                </div>
                
                <button onClick={() => setComprou(true)}>Comprar</button>
            </div> 

            <div>
                {Comprou && <Compra setComprou={setComprou}/> }
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
    excluirCarro: PropTypes.func.isRequired
}



export default CardCarro;