import React, {Component} from 'react'

// import './Form.css'

export default class ProductForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      code: props.code || '',
      name: props.name || '',
      brand: props.brand || '',
      unit: props.unit || '',
      minStock: props.minstock || 0,
      comment: props.comment || ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.handleSubmit(this.state)
    this.setState({
      code: '',
      name: '',
      brand: '',
      unit: '',
      minStock: 0,
      comment: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Codigo</label>
        <input
          type="text"
          name="code"
          onChange={this.handleChange}
          value={this.state.code}
        />

        <label>Nombre</label>
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
        />

        <label>Marca</label>
        <input
          type="text"
          name="brand"
          onChange={this.handleChange}
          value={this.state.brand}
        />

        <label>Unidad</label>
        <input
          type="text"
          name="unit"
          onChange={this.handleChange}
          value={this.state.unit}
        />

        <label>Stock Mínimo</label>
        <input
          type="number"
          name="minStock"
          onChange={this.handleChange}
          value={this.state.minStock}
        />

        <label>Comentario:</label>
        <input
          type="text"
          name="comment"
          onChange={this.handleChange}
          value={this.state.comment}
        />

        <button type="submit" className="btn-save">
          Guardar
        </button>
      </form>
    )
  }
}
