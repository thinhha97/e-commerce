import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './Product/Product'
import useStyles from './styles'

const products = [
  { id: 1, name: 'Shoes', price: '1.050.000VNĐ', description: 'Running shoes' , image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd.line-scdn.net%2Flcp-prod-photo%2F20190717_74%2F1563311570896zsLXx_JPEG%2F818fMp-SaQL.jpg&f=1&nofb=1' },
  { id: 2, name: 'Shirts', price: '299.000VNĐ', description: 'Running shirts', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flive.staticflickr.com%2F7219%2F13928964272_b912842f6f.jpg&f=1&nofb=1' },
  { id: 3, name: 'Pants', price: '399.000VNĐ', description: 'Running pants', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ebayimg.com%2Fimages%2Fg%2FpZ4AAOSw7mhedW5v%2Fs-l1600.jpg&f=1&nofb=1' },
]

const Products = () => {
  const classes = useStyles()
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default Products
