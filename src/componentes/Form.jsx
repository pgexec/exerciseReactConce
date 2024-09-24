
import '../Styles/Form.css'
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import FormInputs from './FormInputs';
import { useState } from 'react';


function Form({addCarro}){

    const [Registrar,SetRegistrar] = useState(false)

    const createCarro = (marca,modelo,ano,cor,imageSrc) =>{
        const carroNovo = {id:uuidv4(), img:imageSrc,marca:marca,modelo:modelo,ano:ano,cor:cor,cpf:null,nome:null,vendido:false}
        console.log(carroNovo)
        addCarro(carroNovo)
    }

    const listagens = [{
        nome: "À Vendas"
    },
    {
        nome:"Vendidos"
    }]

    return(
        <div className='divForm'>
            <div className='divListagens'>
                {listagens.map((listagem,index) =>
                (
                    <li key={index}>{listagem.nome}</li>
                ))}
            </div>
                {Registrar  ? (<FormInputs createCarro={createCarro}></FormInputs>) :
                (<div>
                    <h3>Se deseja Registrar um carro clique no botão abaixo:</h3>
                    <button onClick={() =>SetRegistrar(true)} >Registrar</button>
                </div>)}  
        </div>
    )
}

Form.protoType = {
    addCarro: PropTypes.func.isRequired
}

export default Form;