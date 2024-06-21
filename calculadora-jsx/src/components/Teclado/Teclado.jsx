import './Teclado.css';
import { Botao } from '../Botao/Botao.jsx';

export function Teclado() {
    return (
        <div id='teclado'>
            <Botao char="1"/>
            <Botao char="2"/>
            <Botao char="3"/>
            <Botao char="4"/>
        </div>
    );
}
