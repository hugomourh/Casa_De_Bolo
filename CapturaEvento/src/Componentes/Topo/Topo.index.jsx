import estilo from './Topo.module.css'
import React, { useState } from 'react';

export default function Topo(){


    const [isLegenda, setLegendal] = useState(null);
    
      const toggleLista = (id) => {
        setLegendal((prevId) => (prevId === id ? null : id));
      };
    

    return(
        <>
     <div className={estilo.FundoTela}> 

     <div className={estilo.divBolo}>

     <h1 className={estilo.titulo}>CASA DO BOLO</h1>
     <h1 className={estilo.subtitulo}>O VERDADEIRO BOLO CASEIRO</h1>

     </div>

     <div className={estilo.blocoButton}>

     <div className={estilo.contato}>
     <button className={estilo.button} onClick={() => toggleLista(1)}>
             {isLegenda === 1 ? 'Fechar' : 'Quem Somos'}
           </button>
           
          
           {isLegenda === 1 && (
             <p>Desde 1998, fazendo o melhor bolo caseiro da região, entregando para você o verdadeiro bolo caseiro.</p>
           )}

</div>

<div className={estilo.contato}>

<button className={estilo.button} onClick={() => toggleLista(2)}>
             {isLegenda === 2 ? 'Fechar' : 'Informações de contato'}
           </button>
        
          
           {isLegenda === 2 && (
            <ul>
                <li>Telefone: (61) 9-999-999</li>
                <li>Email: casadobolo@gmail.com</li>
                <li>Endereço: Rua Tiradentes 28</li>
            </ul>
           )}

</div>

</div>
 
</div>
        </>
    );

}