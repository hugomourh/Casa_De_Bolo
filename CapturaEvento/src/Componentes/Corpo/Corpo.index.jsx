import Leite from './assents/leite.jpeg';
import Queijo from './assents/queijo.jpeg'
import Milho from './assents/milho.jpeg'
import Fuba from './assents/fuba.jpeg'
import Cenoura from './assents/cenoura.jpeg'
import Chocolate from './assents/chocolate.jpeg'
import estilo from './Corpo.module.css'
import React, { useState } from 'react';


export default function ListaToggle() {
  const [isListaVisivel, setListaVisivel] = useState(null);

  const toggleLista = (id) => {
    setListaVisivel((prevId) => (prevId === id ? null : id));
  };

  return (

    <>
<div className={estilo.blocoFundo}>

    <div className={estilo.blocoBolo}>
     

    <div>
    <img className={estilo.imagemBloco} src={Leite} alt='Descrição da imagem'/>
      <p>LEITE</p>

      <button className={estilo.button} onClick={() => toggleLista(1)}>
        {isListaVisivel === 1 ? 'Fechar Engredientes' : 'Abrir Engredientes'}
      </button>
      </div>
     
      {isListaVisivel === 1 && (
        <ul>
          <li>Ovo</li>
          <li>Margarina</li>
          <li>Açúcar</li>
          <li>Leite</li>
          <li>Coco</li>
          <li>Queijo</li>
          <li>Trigo</li>
        </ul>
      )}
    </div>
   


  <div className={estilo.blocoBolo}>
  <div>
    <img className={estilo.imagemBloco} src={Queijo} alt='Descrição da imagem'/>
      <p>QUEIJO</p>

      <button className={estilo.button} onClick={() => toggleLista(2)}>
        {isListaVisivel === 2 ? 'Fechar Engredientes' : 'Abrir Engredientes'}
      </button>
      </div>
     
      {isListaVisivel === 2 && (
        <ul>
          <li>Ovo</li>
          <li>Oléo</li>
          <li>Leite</li>
          <li>Polvilho</li>
          <li>Queijo</li>
          <li>Fermento</li>
        
        </ul>
      )}

  </div>


  <div className={estilo.blocoBolo}>
  <div>
    <img className={estilo.imagemBloco} src={Milho} alt='Descrição da imagem'/>
      <p>MILHO</p>

      <button className={estilo.button} onClick={() => toggleLista(3)}>
        {isListaVisivel === 3 ? 'Fechar Engredientes' : 'Abrir Engredientes'}
      </button>
      </div>
     
      {isListaVisivel === 3 && (
        <ul>
          <li>Ovo</li>
          <li>Oléo</li>
          <li>Leite</li>
          <li>Açúcar</li>
          <li>Milho</li>
          <li>Fermento</li>
        
        </ul>
      )}

  </div>

  </div>


<div className={estilo.blocoFundo}>

  <div className={estilo.blocoBolo}>
  <div>
    <img className={estilo.imagemBloco} src={Fuba} alt='Descrição da imagem'/>
      <p>FUBÁ</p>

      <button className={estilo.button} onClick={() => toggleLista(4)}>
        {isListaVisivel === 4 ? 'Fechar Engredientes' : 'Abrir Engredientes'}
      </button>
      </div>
     
      {isListaVisivel === 4 && (
        <ul>
          <li>Ovo</li>
          <li>Oléo</li>
          <li>Leite</li>
          <li>Açúcar</li>
          <li>Fubá</li>
          <li>Fermento</li>
        
        </ul>
      )}

  </div>

  <div className={estilo.blocoBolo}>
  <div>
    <img className={estilo.imagemBloco} src={Cenoura} alt='Descrição da imagem'/>
      <p>CENOURA</p>

      <button className={estilo.button} onClick={() => toggleLista(5)}>
        {isListaVisivel === 5 ? 'Fechar Engredientes' : 'Abrir Engredientes'}
      </button>
      </div>
     
      {isListaVisivel === 5 && (
        <ul>
          <li>Ovo</li>
          <li>Oléo</li>
          <li>Cenoura</li>
          <li>Açúcar</li>
          <li>Trigo</li>
          <li>Fermento</li>
        
        </ul>
      )}

  </div>

  <div className={estilo.blocoBolo}>
  <div>
    <img className={estilo.imagemBloco} src={Chocolate} alt='Descrição da imagem'/>
      <p>CHOCOLATE</p>

      <button className={estilo.button} onClick={() => toggleLista(6)}>
        {isListaVisivel === 6 ? 'Fechar Engredientes' : 'Abrir Engredientes'}
      </button>
      </div>
     
      {isListaVisivel === 6 && (
        <ul>
          <li>Ovo</li>
          <li>Oléo</li>
          <li>Leite</li>
          <li>Açúcar</li>
          <li>Milho</li>
          <li>Fermento</li>
        
        </ul>
      )}

  </div>




  </div>
    </>
  );
}