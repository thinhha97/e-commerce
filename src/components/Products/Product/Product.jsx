import React from 'react'
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

import useStyles from './styles'

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles()

  const description = product.description.length > 500 ? product.description.substr(0, 500) + "..." : product.description

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.image.url || null} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">{product.price.formatted_with_symbol}</Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: description}} variant="body2" color="textSecondary" />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="add to shopping cart" onClick={() => onAddToCart(product.id, 1)}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Product
