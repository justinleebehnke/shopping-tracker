import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core'
import CreateRoundedIcon from '@material-ui/icons/CreateRounded'
import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined'
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined'
import './style.css'

function createData(name, cost, count, isTaxed) {
  return { name, cost, count, isTaxed }
}

const rows = [
  createData('Frozen yoghurt', 159.01, 6.0, false),
  createData('Ice cream sandwich', 237.2, 9.0, true),
  createData('Eclair', 262.23, 16.0, false),
  createData('Cupcake', 305.34, 3.7, true),
  createData('Gingerbread', 356.55, 16.0, true),
  createData('Eclair2', 262.23, 16.0, false),
  createData('Cupcake2', 305.34, 3.7, true),
  createData('Gingeead', 356.55, 16.0, true)
]

function ShoppingItems() {
  return (
    <div id='shopping-items'>
      <Table className='table'>
        <TableHead className='header'>
          <TableRow className='row'>
            <TableCell className='cell'>&nbsp;</TableCell>
            <TableCell className='cell'>Name</TableCell>
            <TableCell className='cell' align='right'>
              $&nbsp;Cost
            </TableCell>
            <TableCell className='cell' align='right'>
              Count
            </TableCell>
            <TableCell className='cell' align='right'>
              Taxed
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className='body'>
          {rows.map(row => {
            return (
              <TableRow key={row.name} className='row'>
                <TableCell className='cell'>
                  <CreateRoundedIcon color='primary' fontSize='small' />
                </TableCell>
                <TableCell className='cell'>{row.name}</TableCell>
                <TableCell className='cell' align='right'>
                  ${row.cost}
                </TableCell>
                <TableCell className='cell' align='right'>
                  {row.count}
                </TableCell>
                <TableCell className='cell' align='right'>
                  {row.isTaxed ? (
                    <CheckBoxOutlinedIcon fontSize='small' />
                  ) : (
                    <CheckBoxOutlineBlankOutlinedIcon fontSize='small' />
                  )}
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}

export default ShoppingItems
