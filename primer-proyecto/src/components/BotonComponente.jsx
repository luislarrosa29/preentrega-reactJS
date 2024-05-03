import './BotonComponente.css'
export default function BotonComponente({text, color}){
    const misEstilos={
        backgroundColor:color,
    }
    const handleClick = () => {
        console.log ('Estas en ' + text)
    }
    return <button onClick={handleClick} style={misEstilos}>{text}</button>
}