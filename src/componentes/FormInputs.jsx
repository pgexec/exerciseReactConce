
import { useState } from "react"
import '../Styles/Form.css'
import PropTypes from 'prop-types';



function FormInputs({createCarro}){
    
    const [marca, setMarca] = useState("")
    const [modelo, setModelo] = useState("")
    const [ano, setAno] = useState("")
    const [cor,setCor] = useState("")
    const [imageSrc,setImageSrc] = useState(null)

    const handleImageChange = (e) => {

        const file = e.target.files[0]
        if(file){
             
            const reader= new FileReader();

            reader.onload = (event) => {

                setImageSrc(event.target.result)
            };
            reader.readAsDataURL(file);
        }else{
            setImageSrc(null);
        }
    }
    
    const handleMarca = (e) =>{
        setMarca(e.target.value)    
    }

    const handleModelo = (e) =>{
        setModelo(e.target.value)    
    }

    const handleAno = (e) =>{
        setAno(e.target.value)
    }

    const handleCor = (e) =>{
        setCor(e.target.value)
    }
    
    return(
        <div className="FormCarro" >

            <label className="picture" >
                <input 
                type="file" 
                onChange={handleImageChange}
                accept="image/*"
                className="picture-input"
                />
                {imageSrc != null ? <img src={imageSrc} alt="" className="picture-img" /> : "Selecione uma foto"}
            </label>
            <div className="divMainInputs">
                <div className="divInputs">
                    <label htmlFor="">Marca:</label>
                    <input type="text" className="inputs" onChange={handleMarca} />
                </div>

                <div className="divInputs">
                    <label htmlFor="">Modelo:</label>
                    <input type="text" className="inputs" onChange={handleModelo}/>
                </div>
                
                <div className="divInputs">
                    <label htmlFor="">Ano:</label>
                    <input type="" className="inputs" onChange={handleAno}/>
                </div>

                <div className="divInputs">
                    <label htmlFor="">Cor</label>
                    <input type="text" className="inputs" onChange={handleCor} />
                </div>
                <button onClick={() => createCarro(marca,modelo,ano,cor,imageSrc)}>Registrar</button>
            </div>
             
            
            
        </div>   
    )
}
FormInputs.protoType = {
    createCarro: PropTypes.func.isRequired,
    
}

export default FormInputs;

