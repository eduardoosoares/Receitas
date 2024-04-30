import { useNavigate } from 'react-router-dom';


export function Tela3(){
    const navi = useNavigate();
    return(
        <>
            <h3>Salgados</h3>
            <button onClick={()=>{navi('/')}} >Menu de Receitas</button>

        </>
    );
}