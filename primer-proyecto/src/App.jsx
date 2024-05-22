import ItemlDetailContainer from "../components/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";
import CustomNavbar from "../components/Navbar";
import "../css/styles.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";






const App = () => {
  return( 
    <BrowserRouter>
    <CustomNavbar/>
    <Routes>
      <Route  path="/" element={<ItemListContainer/>}/>
      <Route  path="/category/:categoryid" element={<ItemListContainer/>}/>
      <Route path="/item/:idItem" element={<ItemlDetailContainer/>}/>
    </Routes>
    
    </BrowserRouter>

  )
}

export default App;