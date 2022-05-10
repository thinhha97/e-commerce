import React from 'react'
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardMedia,
  CardContent,
} from '@material-ui/core'
import useStyles from './styles'
const CartItem = ({ item, handleUpdateCartQty, handleRemoveFromCart }) => {
  const classes = useStyles()
  return (
    <Card>
      <CardMedia
        className={classes.media}
        image={item.image.url}
        alt={item.name}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h5">{item.name}</Typography>
        <Typography variant="h6">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small" onClick={() => {handleUpdateCartQty(item.id, item.quantity - 1)}}>
            -
          </Button>
          <Typography variant="h5">{item.quantity}</Typography>
          <Button type="button" size="small" onClick={() => {handleUpdateCartQty(item.id, item.quantity + 1)}}>
            +
          </Button>
        </div>
        <Button
          className={classes.buttons}
          type="button"
          size="small"
          variant="contained"
          color="secondary"
          onClick={() => {handleRemoveFromCart(item.id)}}
        >
          Xóa
        </Button>
      </CardActions>
    </Card>
  )
}

export default CartItem
