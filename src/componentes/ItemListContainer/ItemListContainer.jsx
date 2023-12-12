import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ItemListContainer = ({ productData }) => {
  console.log(productData)
  return (
    <div style={{ width: '100vw', height: '70vh' }}>
      <div>
        {
          productData.map(product => {
            return (
              <div key={product.id}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={product.img} />
                  <Card.Body>
                    <Card.Title>{product.nombreProducto}</Card.Title>
                    <div>Stock: {product.stock}</div>
                    <div>Precio: {product.valor}</div>
                    <Button variant="primary">Comprar</Button>
                  </Card.Body>
                </Card>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ItemListContainer
