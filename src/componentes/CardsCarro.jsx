
import CardCarro from "./CardCarro";
import PropTypes from 'prop-types';


function CardsCarro({carros, excluirCarro})
{

    return(
        <div className="ConteinerViewCards" >
           {carros && carros.length > 0 ? (carros.map((carro,index) => (

                <CardCarro key={index} id={carro.id} marca={carro.marca} modelo={carro.modelo} cor={carro.cor} ano={carro.ano} imgSrc={carro.img} excluirCarro={excluirCarro}></CardCarro>
           )
           )) : "não tem carros Registrado"}
        </div>
    )
}

CardsCarro.propTypes = {
    carros: PropTypes.arrayOf(
        PropTypes.shape({
            marca:PropTypes.string.isRequired,
            cor:PropTypes.string.isRequired,
            modelo:PropTypes.string.isRequired,
            ano:PropTypes.string.isRequired
        })
    ),
    excluirCarro: PropTypes.func.isRequired
}

export default CardsCarro;