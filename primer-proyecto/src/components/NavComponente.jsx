import './NavComponente.css';
import BotonComponente from "./BotonComponente";

export default function NavComponente(){
    return (
        <>
        <nav className='barra'>        
        <BotonComponente text= "Remeras" color="Red"/>
        <BotonComponente text= "Pantalones" color="Green"/>
        <BotonComponente text= "Buzos" color="Yellow"/></nav>

        </>)
}