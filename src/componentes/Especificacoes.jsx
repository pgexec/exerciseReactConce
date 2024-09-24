import PropTypes from 'prop-types';
import '../Styles/Especificacoes.css'

function Especificacoes({marca,modelo,cor,ano,dono,cpf})
{
    return(
        <div className='divMainEsp'>
            <div className='divInfo'>
                <label htmlFor="">Marca:</label>
                <p>{marca}</p>
                <label htmlFor="">Modelo:</label>
                <p>{modelo}</p>
            </div>

            <div className='divInfo' >
                <label htmlFor="">Cor:</label>
                <p>{cor}</p>
                <label htmlFor="">Ano:</label>
                <p>{ano}</p>
            </div>
            {(dono != "" && cpf != "") && (dono != null && cpf != null) ? 
            <div className='divInfo'>
                <label htmlFor="">Dono:</label>
                <p>{dono}</p>
                <label htmlFor="">CPF:</label>
                <p>{cpf}</p>
            </div> : null}
        </div>
    )
}

Especificacoes.propTypes = {
    marca: PropTypes.string.isRequired,
    modelo:PropTypes.string.isRequired,
    cor:PropTypes.string.isRequired,
    ano:PropTypes.string.isRequired,
    dono:PropTypes.string.isRequired,
    cpf:PropTypes.string.isRequired,
    Comprou:PropTypes.bool.isRequired
}
export default Especificacoes;