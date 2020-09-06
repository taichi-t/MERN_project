import { Button, Segment, Divider } from 'semantic-ui-react';
import calculateCartTotal from '../../utils/calculateCartTotal';

function CartSummary({ products }) {
  const [isCartEmpty, setCartEmpty] = React.useState(false);
  const [stripeAmount, seStripeAmnount] = React.useState(0);
  const [cartAmount, setCartAmount] = React.useState(0);

  React.useEffect(() => {
    const { cartTotal, stripeTotal } = calculateCartTotal(products);
    setCartAmount(cartTotal);
    seStripeAmnount(stripeTotal);
    setCartEmpty(products.length === 0);
  }, [products]);

  return (
    <>
      <Divider />
      <Segment clearing size="large">
        <strong>Sub total:</strong>${cartAmount}
        <Button icon="cart" color="teal" floated="right" content="Checkout" />
      </Segment>
    </>
  );
}

export default CartSummary;
