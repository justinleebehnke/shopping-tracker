class Row {
  constructor (count, isTaxed, name, unitCost) {
    this.count = count
    this.isTaxed = isTaxed
    this.name = name
    this.unitCost = unitCost
  }

  computedCost = (taxRate) => {
    const tax = this.isTaxed ? taxRate / 100 + 1 : 1

    return parseInt(this.unitCost * this.count * 10000 * tax, 10) / 10000
  }
}

export default Row
