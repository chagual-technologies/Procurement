import React, {Component} from 'react'
import {allProducts} from '../../store'
import {connect} from 'react-redux'
import Product from './Product'
import NewProduct from './NewProduct'

class AllProducts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.allProducts()
  }

  handleClick() {
    return this.setState({
      showForm: !this.state.showForm
    })
  }

  render() {
    const {products, loading} = this.props.products
    console.log(loading)

    return (
      <div>
        <NewProduct heading="Nuevo Producto" submitAction="Post" />

        <table className="dataTable">
          <thead>
            <tr>
              <th>Id</th>
              <th>Codigo</th>
              <th>Nombre</th>
              <th>Marca</th>
              <th>Un</th>
              <th>Precio 1</th>
              <th>Precio 2</th>
              <th>Inventario</th>
              <th>Stock</th>
              <th>Pendiente</th>
              <th>Stock Min</th>
              <th>Comentario</th>

              <th>Ver</th>
              <th>Editar</th>
            </tr>
          </thead>

          <tfoot>
            <tr>
              <td colSpan="8">
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
