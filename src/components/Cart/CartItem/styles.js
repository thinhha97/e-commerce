import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  media: {
    height: '240px',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textField: {
    maxWidth: '30px',
  },
}))
