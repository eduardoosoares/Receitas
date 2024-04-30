import { useNavigate } from 'react-router-dom';

export function Tela1(){
    const navi = useNavigate();
    return(
        <>
            <h3>Massas</h3>
            <button onClick={()=>{navi('/')}} >Menu de Receitas</button>
        </>
    );
}