import { useState } from 'react';
import '../Styles/Compra.css'
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

function Compra({carros,id,setComprou,addCarro, excluirCarro})
{
    
    const [Nome,SetNome] = useState("");
    const [Cpf,SetCpf] = useState("");
    const [vendido, setVendido] = useState(false)
    const handleOnchangeNome  = (e) =>{
        SetNome(e.target.value)    
    }

    const handleOnchangeCpf = (e) =>{
        SetCpf(e.target.value)
    }


    const createCarroVendido = () =>{

        const carroAchado = carros.find(carro => carro.id == id)
        console.log("Objeto ACHADO")
        console.log(carroAchado)
        if(carroAchado)
        {
            const carroNovo = {
                ...carroAchado,
                id:uuidv4(),
                cpf:Cpf,
                nome:Nome,
                vendido:true
            };
            excluirCarro(id)
            console.log("id que era para ser achado" + id)
            addCarro(carroNovo); 
            console.log("id do carro novo" + carroNovo.id)
            setComprou(false); 
        }else{
            prompt("não foi achado o carro")
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
            <div>z
                 <button onClick={createCarroVendido}>Comprar</button>
            </div>
        </div>
    )
}

Compra.propTypes ={
    setComprou: PropTypes.func.isRequired,
    carros:PropTypes.array.isRequired,
    addCarro:PropTypes.func.isRequired,
    id:PropTypes.string.isRequired,
    excluirCarro:PropTypes.func.isRequired
}

export default Compra;