import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
import AddIcon from '@material-ui/icons/Add'
import Fab from '@material-ui/core/Fab'
import Row from './Row'

class ShoppingItems extends Component {
  state = {
    rows: [
      new Row(1, false, 'Forzen yoghurt', 1),
      new Row(1, false, 'Ice cream sandwich', 1),
      new Row(1, false, 'Eclair', 1),
      new Row(1, false, 'Cupcake', 1)
    ]
  }

  componentDidUpdate (prevProps) {
    const { taxRate } = this.props

    if (taxRate !== prevProps.taxRate) {
      this.updateTotalCost()
    }
  }

  addItem = () => {
    const { rows } = this.state
    const newRow = new Row(1, true, `Cupcake ${Math.random().toFixed(5)}`, 1)
    this.setState({ rows: [newRow, ...rows] }, this.updateTotalCost)
  }

  updateTotalCost = () => {
    const { rows } = this.state
    const { taxRate, setTotalSpent } = this.props
    const totalCost = rows.reduce((acc, row) => acc + row.computedCost(taxRate), 0)

    setTotalSpent(totalCost)
  }

  onClickEdit = () => this.setState({}, this.updateTotalCost)

  render () {
    const { rows } = this.state

    return (
      <div id='shopping-items'>
        <Table className='table'>
          <TableHead className='header'>
            <TableRow className='row'>
              <TableCell className='cell'>&nbsp;</TableCell>
              <TableCell className='cell'>Name</TableCell>
              <TableCell className='cell' align='right'>
                $&nbsp;Total Cost
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
            {rows.map((row, index) => (
              <TableRow key={row.name} className='row'>
                <TableCell className='cell'>
                  <CreateRoundedIcon
                    onClick={() => this.onClickEdit(index)}
                    color='primary'
                    fontSize='small'
                  />
                </TableCell>
                <TableCell className='cell'>{row.name}</TableCell>
                <TableCell className='cell' align='right'>
                    $
                  {row.unitCost.toFixed(2)}
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
            ))}
          </TableBody>
        </Table>
        <Fab onClick={this.addItem} color='primary' aria-label='add' id='fab'>
          <AddIcon />
        </Fab>
      </div>
    )
  }
}

ShoppingItems.propTypes = {
  setTotalSpent: PropTypes.func.isRequired,
  taxRate: PropTypes.number.isRequired
}

export default ShoppingItems
