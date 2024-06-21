import './Calculadora.css';
import { Visor } from '../Visor/Visor.jsx';
import { Teclado } from '../Teclado/Teclado.jsx';

export function Calculadora() {
    return (
      <section id='calculadora'>
        
        <h1>Calculadora React</h1>
        <Visor/>
        <Teclado/>
        

      </section>
    );
}

