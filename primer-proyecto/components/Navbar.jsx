import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsCart2 } from "react-icons/bs";
import { Link } from 'react-router-dom';
import "../css/styles.css"


const CustomNavbar = ()=>{
    return(
        <header>
              <Navbar bg="dark" variant="dark">
        <Container className='menuNavHeader'>
          <Navbar.Brand><Link to="/" className='Logo'>The Music Hole</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to="/category/1" className='navLinks'>Guitarras</Link></Nav.Link>
            <Nav.Link><Link to="/category/2" className='navLinks'>Bajos</Link></Nav.Link>
            <Nav.Link><Link to="/category/3" className='navLinks'>Pianos</Link></Nav.Link>
          

          </Nav>
        </Container>
      </Navbar>

      <BsCart2/>

      
      

        </header>
        

    )
};

export default CustomNavbar;