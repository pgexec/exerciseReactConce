import '../Styles/Compra.css'
import PropTypes from 'prop-types';

function Compra({setComprou})
{
    return(
        <div className="divCompra">
            <div className='divBotaoFechar' >
                <a className='BotaoFechar' href="" onClick={()=> setComprou(false)}>X</a>
            </div>
            <p>Confirmação de Compra</p>
            <div >
                <label htmlFor="">Nome:</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">CPF:</label>
                <input type="text" />
            </div>
            <div><button>Confirmar</button></div>
        </div>
    )
}

Compra.propTypes ={
    setComprou: PropTypes.func.isRequired
}

export default Compra;