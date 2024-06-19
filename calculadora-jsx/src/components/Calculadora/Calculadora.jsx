import React from "react";
import './Calculadora.css';
import { Visor } from '../Visor/Visor.jsx';

export function Calculadora(props) {
    return (
      <section id='calculadora'>
        
        <h1>Calculadora React</h1>
        <Visor/>
        
      </section>
    );
}

