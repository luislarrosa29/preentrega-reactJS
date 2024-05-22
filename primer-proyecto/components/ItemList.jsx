import Container from 'react-bootstrap/Container';

import Item from "./Item"

const ItemList = (props) => {

  return (
    <>
      <Container className='CartaCompra'>
        {
          props.datos.map(item =>
            <Item
              key={item.id}
              nombre={item.nombre}
              precio={item.precio}
              imagen={item.imagen}
              id={item.id}
            />)
        }
      </Container>
    </>
  )

}

export default ItemList