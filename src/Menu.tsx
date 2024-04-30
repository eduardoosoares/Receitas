import { useNavigate } from 'react-router-dom';
import './App.css'

export function Menu() {
const navi = useNavigate();
  return (
    <>
      <h2>Receitas</h2>
      <button onClick={()=>{navi('/tela1')}} >Massas</button>
      <button onClick={()=>{navi('/tela2');}}>Doces</button>
      <button onClick={()=>{navi('/tela3');}} >Salgados</button>
    </>
  )
}


