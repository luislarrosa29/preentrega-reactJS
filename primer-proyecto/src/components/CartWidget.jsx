import './CartWidget.css'
import { useState } from "react";

export default function CartWidget () {
    const [contador, setContador] =useState(0);

    const handleClick= () => {
        setContador(contador + 1)
    }
    return (
    <>
        <p style={{color:"white"}}>{contador}</p>
        <button onClick={handleClick}  >🛒</button>
    </>
);
}