import PropTypes from 'prop-types';
import '../Styles/Especificacoes.css'

function Especificacoes({marca,modelo,cor,ano})
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

            <div className='divInfo'  >
                
            </div>
        </div>
    )
}

Especificacoes.propTypes = {
    marca: PropTypes.string.isRequired,
    modelo:PropTypes.string.isRequired,
    cor:PropTypes.string.isRequired,
    ano:PropTypes.string.isRequired
}
export default Especificacoes;