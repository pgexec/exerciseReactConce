import { useState } from 'react';
import '../Styles/Compra.css'
import PropTypes from 'prop-types';

function Compra({carros,id,setComprou,setCarros})
{
    
    const [Nome,SetNome] = useState("");
    const [Cpf,SetCpf] = useState("");
    const handleOnchangeNome  = (e) =>{
        SetNome(e.target.value)    
    }

    const handleOnchangeCpf = (e) =>{
        SetCpf(e.target.value)
    }


    const createCarroVendido = () =>{

        const index = carros.findIndex(carro => carro.id === id);

        if (index !== -1) {
            const carroAtualizado = {
                ...carros[index],
                cpf: Cpf,        
                nome: Nome,     
                vendido: true  
            };
            const carrosAtualizados = [...carros];
            carrosAtualizados[index] = carroAtualizado;
            setCarros(carrosAtualizados); 
    
            // Fechar o modal de compra
            setComprou(false);
        } else {
            alert("Carro não encontrado");
        }
    }

    return(
        <div className="divCompra">
            <div className='divBotaoFechar' >
                <button className='BotaoFechar' href="" onClick={()=> setComprou(false)}>fechar</button>
            </div>
            <div>
                <p>Preencha seus dados</p>
                <p>Para continuar a compra</p>
            </div>
            <div >
                <label htmlFor="">Nome:</label>
                <input type="text"  onChange={handleOnchangeNome}/>
            </div>
            <div>
                <label htmlFor="">CPF:</label>
                <input type="text" onChange={handleOnchangeCpf}/>
            </div>
            <div>
                 <button onClick={createCarroVendido}>Comprar</button>
            </div>
        </div>
    )
}

Compra.propTypes ={
    setComprou: PropTypes.func.isRequired,
    carros:PropTypes.array.isRequired,
    setCarros:PropTypes.func.isRequired,
    id:PropTypes.string.isRequired,
    excluirCarro:PropTypes.func.isRequired
}

export default Compra;