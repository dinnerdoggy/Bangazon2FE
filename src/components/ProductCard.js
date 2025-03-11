import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

function ProductCard({ productObj }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={productObj.productImage} />
      <Card.Body>
        <Card.Title>{productObj.productName}</Card.Title>
        <Card.Subtitle>{productObj.productTypeId}</Card.Subtitle>
        <Card.Text>{productObj.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

ProductCard.propTypes = {
  // onUpdate: PropTypes.func.isRequired,
  productObj: PropTypes.shape({
    productImage: PropTypes.string,
    productName: PropTypes.string,
    productTypeId: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
