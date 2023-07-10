import { useState } from 'react'
import './App.css'

import logoImg from './assets/Meu projeto.png' 

function App() {
  
  const [textoFrase, setTextoFrase] = useState('')
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  const allFrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        'Siga os bons, e aprenda com eles.',
        'O bom-senso vale mais que do que muito conhecimento.',
        'O riso pe a menor distância entre duas pessoas',
        'Deixe de lado as preocupações e seja feliz.',
        'Realize o óbvio, pense no improvável e conquiste o impossível',
        'Acredite em milagres, mas não dependa deles.',
        'A maior barreira para o sucesso é o medo de fracassar.'
      ]
    },{
      id: 2,
      nome: "Bem estar",
      frases:[
        "Cultive pensamentos bons, rodeie-se de pessoas positivas e fique de bem com a vida.",
        "É maravilhoso ver o sorriso das pessoas que estão de bem com a vida.",
        "Estar de bem com a vida não é viver sem dificuldades, mas saber lidar com elas sem pensar em desistir.",
        "Você percebe que está de bem com a vida quando sua maior preocupação é o bem-estar dos outros.",
        "No momento que deixei de dar tanta importância aos aspectos materiais fiquei mais feliz e de bem com a vida.",
        "Hoje estou de bem com a vida porque ignoro o que antes me incomodava e agradeço pelo que antes desprezava."
      ]
    }
  ]

  function handleSwitchCatergory(index:number){
    setCategoriaSelecionada(index)
  }

  function gerarFrase(){
    let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)

   
    setTextoFrase(`"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`)
  }

  return (
    <>

      <div className='container'>
        <img 
          src={logoImg} 
          alt="Logo frases"
          className='logo' 
        />


        <h2 className='title'>Categorias</h2>

        <section className='category-area'>

          {
            allFrases.map((item, index)=> (
              <button
               className='categoty-button'
               key={item.id}
               style ={{
                borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 3 : 0
               }}

               onClick={() =>handleSwitchCatergory(index)}
              >
                  {item.nome}
              </button>
            ))
          }

        </section>

        <button 
          className='button-frase'
          onClick={gerarFrase}
        >
          Gerar frase
        </button>


        {
          textoFrase !== '' &&
            <p className='texto-frase'>
              {textoFrase}
            </p>
        }

      </div>
    </>
  )
}

export default App
