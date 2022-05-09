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
const CartItem = ({ item }) => {
  const classes = useStyles()
  return (
    <Card>
      <CardMedia
        className={classes.media}
        image={item.image.url}
        alt={item.name}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">{item.price.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.button}>
          <Button type="button" size="small">
            -
          </Button>
          <Typography variant="h5">{item.quantity}</Typography>
          <Button type="button" size="small">
            +
          </Button>
        </div>
        <Button className={classes.button}
          type="button"
          size="small"
          variant="contained"
          color="secondary"
        >
          Xóa
        </Button>
      </CardActions>
    </Card>
  )
}

export default CartItem
