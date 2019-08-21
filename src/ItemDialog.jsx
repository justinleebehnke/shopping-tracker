import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import AddIcon from '@material-ui/icons/Add'
import Fab from '@material-ui/core/Fab'
import Slide from '@material-ui/core/Slide'
import Row from './Row'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
}))

const Transition = React.forwardRef((props, ref) => <Slide direction='up' ref={ref} {...props} />)

function ItemDialog ({ addItem }) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  function handleClickOpen () {
    setOpen(true)
  }

  function handleClose () {
    setOpen(false)
    // add the item and do a little 3 second toast at the end to say item added!
    addItem(new Row(1, true, `Cupcake ${Math.random().toFixed(5)}`, 1))
  }

  return (
    <div>
      <Fab onClick={handleClickOpen} color='primary' aria-label='add' id='fab'>
        <AddIcon />
      </Fab>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge='start' color='inherit' onClick={handleClose} aria-label='close'>
              <CloseIcon />
            </IconButton>
            <Typography variant='h6' className={classes.title}>
              Sound
            </Typography>
            <Button color='inherit' onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary='Phone ringtone' secondary='Titania' />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary='Default notification ringtone' secondary='Tethys' />
          </ListItem>
        </List>
      </Dialog>
    </div>
  )
}

ItemDialog.propTypes = {
  addItem: PropTypes.func.isRequired
}

export default ItemDialog
