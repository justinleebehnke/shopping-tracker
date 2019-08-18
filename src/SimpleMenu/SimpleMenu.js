import React from 'react'
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem'

export default function SimpleMenu () {
  const [anchorEl, setAnchorEl] = React.useState(null)

  function handleClose () {
    setAnchorEl(null)
  }

  function handleClick (event) {
    setAnchorEl(event.currentTarget)
  }

  return (
    <div>
      <MenuIcon onClick={handleClick} />
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>About</MenuItem>
        <MenuItem onClick={handleClose}>Clear Items</MenuItem>
      </Menu>
    </div>
  )
}
