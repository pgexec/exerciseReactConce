import { useState } from 'react'
import './App.css'
import Form from './componentes/Form'
import CardsCarro from './componentes/CardsCarro'


function App(){
  

  const [carros,setCarros] = useState([])
  
  const addCarro = (carro) =>{
    setCarros([...carros,carro])
  }

  const excluirCarro = (id) =>{
    const result = carros.find(carro => carro.id == id)
    if(result){
      setCarros(carros.filter(carro => carro.id != id))
    }else{
      console.log("erro ao excluir, não foi possivel achar o id do carro");
    }
  }



  return (
    <div className='appDiv'>
      <header>
        <div>
          <img src="" alt="" />
        </div>
        <div className='OptionHeader'>
          <a href="">home</a>
          <a href="">carros</a>
        </div>
      </header>
      <div>
        <h1>Bem vindo</h1>
        <h2>Seu novo carro não é apenas um veículo. É uma experiência.</h2>
      </div>
      <Form addCarro={addCarro}></Form>
      <CardsCarro carros={carros} excluirCarro ={excluirCarro} addCarro={addCarro} ></CardsCarro>
    </div>
  )
}

export default App
