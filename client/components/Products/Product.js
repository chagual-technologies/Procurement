import React, {Component} from 'react'
import {IoMdCreate, IoMdOpen} from 'react-icons/io'

import EditProduct from './EditProduct'

export default class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => ({showForm: !prevState.showForm}))
  }

  render() {
    const product = this.props.product

    return (
      <tbody>
        <tr key={product.id}>
          <td className="id">{product.id}</td>
          <td>{product.code}</td>
          <td>{product.name}</td>
          <td>{product.brand}</td>
          <td className="number">{product.unit}</td>
          <td className="number"> ${product.price1}</td>
          <td className="number">${product.price2}</td>
          <td className="number">{product.inventory}</td>
          <td className="number"> {product.stock}</td>
          <td className="number">{product.pending}</td>
          <td className="number">{product.minstock}</td>
          <td>{product.comment}</td>
          <td>
            {' '}
            <IoMdOpen />
          </td>
          <td className="react-icons">
            <button type="button" onClick={this.handleClick}>
              <IoMdCreate />
            </button>

            {this.state.showForm ? (
              <EditProduct
                heading="Editar Producto"
                submitAction="Post"
                id={product.id}
                code={product.code}
                name={product.name}
                brand={product.brand}
                unit={product.unit}
                minstock={product.minstock}
                comment={product.comment}
              />
            ) : null}
          </td>
        </tr>
      </tbody>
    )
  }
}
