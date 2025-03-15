import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { clientCredentials } from '../utils/client';
import { useAuth } from '../utils/context/authContext';

const endpoint = clientCredentials.databaseURL;

function ProductCard({ productObj }) {
  const { user } = useAuth();

  const addToCart = (productId) => {
    const orderData = {
      customerId: 1,
      productId,
    };

    fetch(`${endpoint}/api/orders/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => response.json())
      .then((data) => console.log('Added to cart:', data))
      .catch((error) => console.error('Error adding to cart:', error));
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={productObj.productImage} />
      <Card.Body>
        <Card.Title>{productObj.productName}</Card.Title>
        <Card.Subtitle style={{ color: '#8D7D6C' }}>{productObj.type}</Card.Subtitle>
        <hr />
        <Card.Text>{productObj.description}</Card.Text>
        <Button onClick={() => addToCart(productObj.id, user.uid)}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

ProductCard.propTypes = {
  productObj: PropTypes.shape({
    id: PropTypes.number,
    productImage: PropTypes.string,
    productName: PropTypes.string,
    type: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
