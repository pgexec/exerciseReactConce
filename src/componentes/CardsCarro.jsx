
import { useState } from "react";
import CardCarro from "./CardCarro";
import PropTypes from 'prop-types';


function CardsCarro({carros, excluirCarro,setCarros})
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

    const [listChoose, setListChoose] = useState(false)

    const handleOnclickList = (escolha) =>{
        setListChoose(escolha)
    }

    return(
        <div className="ConteinerViewCards" >
             <div className='divListagens'>
                {listagens.map((listagem,index) =>
                (
                    <li onClick={() =>handleOnclickList(listagem.vendido)} key={index}>
                        {listagem.nome}
                    </li>
                ))}  
            </div>
            
            {carros && carros.length > 0 ? (carros.filter(carro => carro.vendido === listChoose).map(carro => (
            <CardCarro 
                key={carro.id}
                id={carro.id}
                marca={carro.marca}
                modelo={carro.modelo}
                cor={carro.cor}
                ano={carro.ano}
                imgSrc={carro.img}
                cpf={carro.cpf}
                dono={carro.nome}
                carros={carros}
                excluirCarro={excluirCarro}
                setCarros={setCarros}
            />))) : "Não há carro Registrado"
            }
        </div>
            )
}

CardsCarro.propTypes = {
    carros: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,  // Adicione aqui
            marca: PropTypes.string.isRequired,
            cor: PropTypes.string.isRequired,
            modelo: PropTypes.string.isRequired,
            ano: PropTypes.string.isRequired,
            cpf: PropTypes.string,  // Adicione aqui
            dono: PropTypes.string  // Adicione aqui
        })
    ),
    excluirCarro: PropTypes.func.isRequired,
    setCarros: PropTypes.func.isRequired
};

export default CardsCarro;