import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import CartItem from './CartItem/CartItem.jsx'
import useStyles from './styles'

const Cart = ({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  const classes = useStyles()
  if (!cart.line_items) {
    return 'Loading...'
  }
  const isEmpty = !cart.line_items.length

  const EmptyCart = () => {
    return (
      <Typography variant="subtitle1">
        Bạn không có mặt hàng nào trong giỏ.
        <br />
        <Link to="/" className={classes.link}>Tiếp tục mua hàng</Link>
      </Typography>
    )
  }

  const FilledCart = () => {
    return (
      <>
        <Grid container justify="center" spacing={3}>
          {cart.line_items.map((item) => (
            <Grid item key={item.id} xs={12} sm={4}>
              <CartItem
                item={item}
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            </Grid>
          ))}
        </Grid>
        <div className="classes.cartDetails">
          <Typography variant="subtitle1">
            Tổng tiền: {cart.subtotal.formatted_with_symbol}
          </Typography>
          <div>
            <Button
              className={classes.emptyButton}
              size="large"
              type="button"
              variant="contained"
              color="secondary"
              onClick={handleEmptyCart}
            >
              Xóa giỏ hàng
            </Button>
            <Button
              component={Link}
              to="/checkout"
              className={classes.checkoutButton}
              size="large"
              type="button"
              variant="contained"
              color="primary"
            >
              Thanh toán
            </Button>
          </div>
        </div>
      </>
    )
  }
  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3">
        Giỏ hàng của bạn
      </Typography>
      {isEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  )
}

export default Cart
