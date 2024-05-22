import { useEffect } from "react";
import { useState } from "react"
import {data} from "../src/assets/utils/data"
import { customFetch } from "../src/assets/utils/customFetch";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


const ItemlDetailContainer = () =>{
    const [dato,setDato] = useState({});
    const { idItem } = useParams ();
    

    useEffect(()=>{
        customFetch(2000,data.find(item=> item.id == idItem))
        .then(result => setDato(result))
        .catch(err => console.log(err))
    },[]);

    return(
        <ItemDetail item={dato}/>
    );
}

export default ItemlDetailContainer