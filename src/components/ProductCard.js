import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

function ProductCard({ productObj }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={productObj.ProductImage} />
      <Card.Body>
        <Card.Title>{productObj.ProductName}</Card.Title>
        <Card.Subtitle>{productObj.ProductTypeId}</Card.Subtitle>
        <Card.Text>{productObj.Description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

ProductCard.propTypes = {
  // onUpdate: PropTypes.func.isRequired,
  productObj: PropTypes.shape({
    ProductImage: PropTypes.string,
    ProductName: PropTypes.string,
    ProductTypeId: PropTypes.string,
    Description: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
