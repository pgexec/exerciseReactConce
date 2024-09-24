
import CardCarro from "./CardCarro";
import PropTypes from 'prop-types';


function CardsCarro({carros, excluirCarro,addCarro})
{
    const listagens = [
    {
        nome: "À Venda",
        vendido: false
    },
    {
        nome:"Vendidos",
        vendido:true
    }]

    return(
        <div className="ConteinerViewCards" >
             <div className='divListagens'>
                {listagens.map((listagem,index) =>
                (
                    <li key={index}>{listagem.nome}</li>
                ))}  
            </div>
           {carros && carros.length > 0 ? (carros.map((carro,index) => (

                <CardCarro addCarro={addCarro}
                cpf ={carro.cpf}
                dono ={carro.nome} 
                carros={carros} 
                key={index} 
                id={carro.id} 
                marca={carro.marca}
                modelo={carro.modelo} 
                cor={carro.cor} 
                ano={carro.ano} 
                imgSrc={carro.img} 
                excluirCarro={excluirCarro}></CardCarro>
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
    excluirCarro: PropTypes.func.isRequired,
    addCarro:PropTypes.func.isRequired
}

export default CardsCarro;