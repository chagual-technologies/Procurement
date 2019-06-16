import React, {Component} from 'react'
import {allProducts} from '../../store'
import {connect} from 'react-redux'

import ReactModal from 'react-modal'
import {IoMdAddCircle, IoIosCloseCircleOutline} from 'react-icons/io'

import Product from './Product'
import NewProduct from './NewProduct'

class AllProducts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  componentDidMount() {
    this.props.allProducts()
  }

  handleOpenModal() {
    this.setState(prevState => ({showModal: !prevState.showModal}))
  }

  handleCloseModal() {
    this.setState(prevState => ({showModal: !prevState.showModal}))
  }

  render() {
    const {products, loading} = this.props.products

    console.log('in ALL', products)

    return (
      <div>
        <div className="main-box">
          <div className="title">
            <h2>Listado de Productos</h2>
            <button
              type="button"
              className="btn-corner-main"
              onClick={this.handleOpenModal}
            >
              <IoMdAddCircle />
            </button>
          </div>
        </div>

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
              Nuevo Producto
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
              <NewProduct heading="Nuevo Producto" submitAction="Post" />
            </div>
          </div>
        </ReactModal>

        <table className="dataTable">
          <thead>
            <tr>
              <th>Id</th>
              <th>Codigo</th>
              <th>Nombre</th>
              <th>Marca</th>
              <th>Inventariable</th>
              <th>Tipo</th>

              <th>Un</th>
              <th>$ Actual </th>
              <th>$ Anterior</th>
              <th>Stock</th>
              <th>Valor Stock</th>
              <th>Por Recibir</th>
              <th>Stock Min</th>
              <th>Comentario</th>
              <th>Editar</th>
            </tr>
          </thead>

          <tfoot>
            <tr>
              <td colSpan="15">
                <div className="links">
                  <a href="#">&laquo;</a>{' '}
                  <a className="active" href="#">
                    1
                  </a>{' '}
                  <a href="#">2</a> <a href="#">3</a> <a href="#">4</a>{' '}
                  <a href="#">&raquo;</a>
                </div>
              </td>
            </tr>
          </tfoot>

          {products && !loading ? (
            products.map(product => (
              <Product product={product} key={product.id} />
            ))
          ) : (
            <h1>still loading!</h1>
          )}
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.product
})

const mapDispatchToProps = {
  allProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
