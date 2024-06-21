import './Botao.css';

export function Botao(props) {
    return (
        <div id='teclado'>
            <button className='botao'>{props.char}</button>
        </div>
    );
}
