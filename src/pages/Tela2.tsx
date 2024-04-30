import { useNavigate } from 'react-router-dom';

export function Tela2(){
    const navi = useNavigate();
    return(
        <>
            <h3>Doces</h3>
            <button onClick={()=>{navi('/')}} >Menu de Receitas</button>
        </>
    );
}