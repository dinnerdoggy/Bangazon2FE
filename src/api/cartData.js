import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const addToCart = (productId, user) => {
  const orderData = {
    customerId: user, // Replace with the logged-in user's ID
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

export default { addToCart };
