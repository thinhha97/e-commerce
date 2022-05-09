import React from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from '@material-ui/core'
import useStyles from './styles'
import { ShoppingCart } from '@material-ui/icons'
import logo from '../../assets/Ecommerce.png'
const Navbar = ({totalItems}) => {
  const classes = useStyles()
  return (
    <>
      <AppBar position="fixed" className="classes.appBar" color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img
              src={logo}
              alt="Commerce.js"
              height="75px"
              className={classes.image}
            />
            Ecommerce
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton color="inherit" aria-label="cart">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
