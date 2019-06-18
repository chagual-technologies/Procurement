import React, {Component} from 'react'
import ReactModal from 'react-modal'
import {IoMdCreate, IoMdOpen, IoIosCloseCircleOutline} from 'react-icons/io'
import EditProduct from './EditProduct'

export default class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }

    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleOpenModal() {
    this.setState(prevState => ({showModal: !prevState.showModal}))
  }

  handleCloseModal() {
    this.setState(prevState => ({showModal: !prevState.showModal}))
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

          {product.inventory === 1 ? <td> Si </td> : <td> No </td>}

          <td>{product.type.name}</td>

          <td className="number">{product.unit}</td>

          <td className="number"> ${product.price1}</td>
          <td className="number">${product.price2}</td>
          <td className="number"> {product.stock}</td>
          <td className="number"> ${product.stock * product.price1}</td>
          <td className="number">{product.pending}</td>
          <td className="number">{product.minstock}</td>
          <td>{product.comment}</td>

          <td className="react-icons">
            <button type="button" onClick={this.handleOpenModal}>
              <IoMdCreate />
            </button>

            <ReactModal
              isOpen={this.state.showModal}
              contentLabel="Modal to Edit Product"
              onRequestClose={this.handleCloseModal}
              shouldCloseOnOverlayClick={false}
              ariaHideApp={false}
              className="Modal"
              overlayClassName="Overlay"
            >
              <div className="box">
                <div className="box-header">
                  Editar Producto
                  <button
                    type="button"
                    onClick={this.handleCloseModal}
                    className="btn-corner"
                    alt="Cerrar"
                  >
                    <IoIosCloseCircleOutline />
                  </button>
                </div>

                <div className="box-content">
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
                </div>
              </div>
            </ReactModal>
          </td>
        </tr>
      </tbody>
    )
  }
}
